import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CONTACT_RECIPIENT_EMAIL =
  Deno.env.get("CONTACT_RECIPIENT_EMAIL") || "ashutoshthakur713@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  serviceType: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, address, serviceType, message }: ContactRequest = await req.json();

    console.log("Sending contact email for:", name);

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RapidFlow Plumbing <onboarding@resend.dev>",
        to: [CONTACT_RECIPIENT_EMAIL],
        subject: `New Service Request: ${serviceType}`,
        html: `
          <h2>New Service Request from RapidFlow Plumbing Website</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
          <p><strong>Service Type:</strong> ${serviceType}</p>
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
          <hr />
          <p><em>This request was submitted via the RapidFlow Plumbing contact form.</em></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Resend API error: ${errorText}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
