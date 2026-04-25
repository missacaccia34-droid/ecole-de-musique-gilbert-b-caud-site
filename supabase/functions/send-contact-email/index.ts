import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Champs obligatoires manquants' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Adresse email invalide' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      // Fallback: store in database if no email service configured
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase.from('contact_messages').insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      });

      if (dbError) {
        console.error('Database error:', dbError);
        return new Response(
          JSON.stringify({ success: false, error: 'Erreur lors de l\'envoi' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, method: 'database' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email via Resend
    const emailBody = `
Nouvelle demande de cours d'essai

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Cours souhaité : ${subject || 'Non précisé'}

Message :
${message}
    `.trim();

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'École de Musique <onboarding@resend.dev>',
        to: ['ecolegilbertbecaud@gmail.com'],
        subject: `Nouvelle demande — ${subject || 'Cours d\'essai'} — ${firstName} ${lastName}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend error:', errorData);
      return new Response(
        JSON.stringify({ success: false, error: 'Erreur lors de l\'envoi de l\'email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, method: 'email' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
