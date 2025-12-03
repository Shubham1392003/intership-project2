// src/routes/api/chapter/[id]/+server.js
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
  const { id } = params;

  try {
    const response = await fetch(
      `https://sanskrit.ie/api/geeta.php?q=${id}`,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://sanskrit.ie/",
          Origin: "https://sanskrit.ie",
        },
      }
    );

    if (!response.ok) {
      return json(
        { error: "API returned invalid response", status: response.status },
        { status: 500 }
      );
    }

    const data = await response.json();
    return json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (error) {
    return json(
      { error: "Server Fetch Failed", details: error.message },
      { status: 500 }
    );
  }
}
