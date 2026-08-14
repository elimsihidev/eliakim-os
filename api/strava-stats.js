// Vercel serverless function: /api/strava-stats
// Keeps your Strava credentials safely on the server.

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

    // --------------------------------------------------
    // 1. Get a fresh Strava access token
    // --------------------------------------------------

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

    // --------------------------------------------------
    // 2. Get athlete information
    // --------------------------------------------------

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

    // --------------------------------------------------
    // 3. Get athlete statistics
    // --------------------------------------------------

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
    // 4. Recent running statistics
    // --------------------------------------------------

    const recentRuns = stats.recent_run_totals || {};

    const distanceMeters = recentRuns.distance || 0;
    const movingTimeSeconds = recentRuns.moving_time || 0;
    const elevationGainMeters = recentRuns.elevation_gain || 0;
    const runCount = recentRuns.count || 0;

    // Convert meters to kilometers
    const runDistanceKm =
      Math.round((distanceMeters / 1000) * 10) / 10;

    // --------------------------------------------------
    // 5. Calculate average pace
    // --------------------------------------------------

    let paceSecondsPerKm = 0;

    if (distanceMeters > 0) {
      paceSecondsPerKm =
        movingTimeSeconds / (distanceMeters / 1000);
    }

    // Round pace to nearest second
    paceSecondsPerKm = Math.round(paceSecondsPerKm);

    // --------------------------------------------------
    // 6. Return simplified data for the website
    // --------------------------------------------------

    const payload = {
      recent: {
        runCount: runCount,

        runDistanceKm: runDistanceKm,

        movingTimeSeconds: movingTimeSeconds,

        elevationGainMeters: Math.round(elevationGainMeters),

        paceSecondsPerKm: paceSecondsPerKm,
      },

      allTime: {
        runDistanceKm:
          Math.round(
            ((stats.all_run_totals?.distance || 0) / 1000) * 10
          ) / 10,

        movingTimeSeconds:
          stats.all_run_totals?.moving_time || 0,

        elevationGainMeters:
          Math.round(stats.all_run_totals?.elevation_gain || 0),
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