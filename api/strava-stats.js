// Vercel serverless function: /api/strava-stats
// Keeps Strava credentials safely on the server.
// Credentials are read from Vercel Environment Variables.

export default async function handler(req, res) {
  try {
    const clientId = process.env.STRAVA_CLIENT_ID;
    const clientSecret = process.env.STRAVA_CLIENT_SECRET;
    const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(500).json({
        error: "Missing Strava environment variables.",
      });
    }

    // 1. Refresh the Strava access token
    const tokenResponse = await fetch(
      "https://www.strava.com/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
          grant_type: "refresh_token",
        }),
      }
    );

    if (!tokenResponse.ok) {
      const text = await tokenResponse.text();

      return res.status(502).json({
        error: "Failed to refresh Strava token",
        details: text,
      });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Get the athlete
    const athleteResponse = await fetch(
      "https://www.strava.com/api/v3/athlete",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!athleteResponse.ok) {
      const text = await athleteResponse.text();

      return res.status(502).json({
        error: "Failed to fetch athlete",
        details: text,
      });
    }

    const athlete = await athleteResponse.json();

    // 3. Get athlete statistics
    const statsResponse = await fetch(
      `https://www.strava.com/api/v3/athletes/${athlete.id}/stats`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!statsResponse.ok) {
      const text = await statsResponse.text();

      return res.status(502).json({
        error: "Failed to fetch Strava stats",
        details: text,
      });
    }

    const stats = await statsResponse.json();

    // --------------------------------------------------
    // RUNNING STATS
    // --------------------------------------------------

    const recentRuns = stats.recent_run_totals || {};

    const runCount = recentRuns.count || 0;

    const runDistanceMeters = recentRuns.distance || 0;

    const runDistanceKm =
      Math.round((runDistanceMeters / 1000) * 10) / 10;

    // Moving time is returned by Strava in seconds
    const movingTimeSeconds = recentRuns.moving_time || 0;

    // Convert total time into hours + minutes
    const totalTimeHours = Math.floor(
      movingTimeSeconds / 3600
    );

    const totalTimeMinutes = Math.floor(
      (movingTimeSeconds % 3600) / 60
    );

    // Average pace
    // seconds per kilometer
    let avgPace = "0:00";

    if (runDistanceMeters > 0 && movingTimeSeconds > 0) {
      const secondsPerKm =
        movingTimeSeconds / (runDistanceMeters / 1000);

      const paceMinutes = Math.floor(secondsPerKm / 60);

      const paceSeconds = Math.round(secondsPerKm % 60);

      avgPace = `${paceMinutes}:${String(paceSeconds).padStart(
        2,
        "0"
      )}`;
    }

    // Elevation gain
    const totalElevation = Math.round(
      recentRuns.elevation_gain || 0
    );

    // --------------------------------------------------
    // ALL-TIME STATS
    // --------------------------------------------------

    const allRunTotals = stats.all_run_totals || {};

    const allTimeRunDistanceKm =
      Math.round(
        ((allRunTotals.distance || 0) / 1000) * 10
      ) / 10;

    // --------------------------------------------------
    // FINAL RESPONSE
    // --------------------------------------------------

    const payload = {
      athlete: {
        id: athlete.id,
        firstname: athlete.firstname || "",
        lastname: athlete.lastname || "",
      },

      recent: {
        runCount,
        runDistanceKm,

        totalTimeHours,
        totalTimeMinutes,

        avgPace,

        totalElevation,
      },

      allTime: {
        runDistanceKm: allTimeRunDistanceKm,
      },
    };

    // Cache for 15 minutes
    res.setHeader(
      "Cache-Control",
      "s-maxage=900, stale-while-revalidate=1800"
    );

    return res.status(200).json(payload);
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected error",
      details: String(err),
    });
  }
}