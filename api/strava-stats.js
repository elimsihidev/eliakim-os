// Vercel serverless function: /api/strava-stats
// Keeps your Strava Client Secret and Refresh Token safely on the server.
// Reads credentials from Vercel Environment Variables — never hardcode them here.

export default async function handler(req, res) {
  try {
    const clientId = process.env.STRAVA_CLIENT_ID;
    const clientSecret = process.env.STRAVA_CLIENT_SECRET;
    const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(500).json({ error: "Missing Strava environment variables." });
    }

    // 1. Exchange the long-lived refresh token for a fresh short-lived access token.
    const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!tokenResponse.ok) {
      const text = await tokenResponse.text();
      return res.status(502).json({ error: "Failed to refresh Strava token", details: text });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Get the logged-in athlete's ID.
    const athleteResponse = await fetch("https://www.strava.com/api/v3/athlete", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!athleteResponse.ok) {
      const text = await athleteResponse.text();
      return res.status(502).json({ error: "Failed to fetch athlete", details: text });
    }

    const athlete = await athleteResponse.json();

    // 3. Get that athlete's stats (includes recent 4-week totals + all-time totals).
    const statsResponse = await fetch(
      `https://www.strava.com/api/v3/athletes/${athlete.id}/stats`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!statsResponse.ok) {
      const text = await statsResponse.text();
      return res.status(502).json({ error: "Failed to fetch stats", details: text });
    }

    const stats = await statsResponse.json();

    // 4. Return only the simplified numbers the frontend needs.
    const metersToKm = (m) => Math.round((m / 1000) * 10) / 10;

    const payload = {
      recent: {
        runCount: stats.recent_run_totals?.count ?? 0,
        runDistanceKm: metersToKm(stats.recent_run_totals?.distance ?? 0),
        rideCount: stats.recent_ride_totals?.count ?? 0,
        rideDistanceKm: metersToKm(stats.recent_ride_totals?.distance ?? 0),
      },
      allTime: {
        runDistanceKm: metersToKm(stats.all_run_totals?.distance ?? 0),
        rideDistanceKm: metersToKm(stats.all_ride_totals?.distance ?? 0),
      },
    };

    // Cache for 15 minutes at the edge to stay well within Strava's rate limits.
    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
    return res.status(200).json(payload);
  } catch (err) {
    return res.status(500).json({ error: "Unexpected error", details: String(err) });
  }
}