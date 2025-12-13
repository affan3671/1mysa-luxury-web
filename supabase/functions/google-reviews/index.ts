import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!apiKey) {
      throw new Error("Google Places API key not configured");
    }

    // Place ID for 1mysa Café - you can find this from Google Maps
    const placeId = "ChIJ4cKz_9fmDDkRSe4vGOBMH8M"; // Replace with actual Place ID

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google API error: ${data.status}`);
    }

    const reviews = data.result?.reviews?.map((review: any) => ({
      id: review.time,
      name: review.author_name,
      rating: review.rating,
      text: review.text,
      date: review.relative_time_description,
      avatar: review.author_name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase(),
      profilePhoto: review.profile_photo_url,
    })) || [];

    return new Response(
      JSON.stringify({
        reviews,
        rating: data.result?.rating,
        totalReviews: data.result?.user_ratings_total,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    console.error("Error fetching reviews:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
