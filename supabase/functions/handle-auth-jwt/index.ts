
// handle-auth-jwt/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// This function adds custom claims to the JWT token
const handleJWT = async (req: Request) => {
  try {
    // Get the request body
    const { event, user, claims } = await req.json();
    
    console.log(`Processing JWT for event: ${event}`);
    console.log(`User: ${JSON.stringify(user)}`);
    
    // Only customize claims for certain events
    if (event === 'SIGNIN' || event === 'TOKEN_REFRESH') {
      // Add custom claims
      const customClaims = {
        // Example of adding custom claims based on user data
        // You can modify these as needed for your application
        "user_role": user.user_metadata?.role || "user",
        "full_name": user.user_metadata?.full_name || "",
        "custom_app_data": {
          "last_signin": new Date().toISOString(),
          "app_version": "1.0.0"
        }
      };
      
      // Merge custom claims with existing claims
      Object.assign(claims, customClaims);
      
      console.log("JWT customized with additional claims");
    }

    return new Response(JSON.stringify({ claims }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Error customizing JWT:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
};

// Serve the function
serve(handleJWT);
