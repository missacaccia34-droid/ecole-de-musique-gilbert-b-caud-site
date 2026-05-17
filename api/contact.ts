const SCHOOL_EMAIL = 'ecolegilbertbecaud@gmail.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { firstName, lastName, email, phone, subject, message } = req.body || {};

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, error: 'Champs obligatoires manquants' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Adresse email invalide' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return res.status(500).json({
        success: false,
        error: "L'envoi email n'est pas encore configuré sur Vercel.",
      });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'École de Musique <onboarding@resend.dev>';
    const emailBody = `
Nouvelle demande de cours d'essai

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Cours souhaité : ${subject || 'Non précisé'}

Message :
${message}
    `.trim();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [SCHOOL_EMAIL],
        subject: `Nouvelle demande — ${subject || 'Cours d\'essai'} — ${firstName} ${lastName}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Resend error:', errorData);
      return res.status(500).json({ success: false, error: "Erreur lors de l'envoi de l'email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, error: 'Erreur serveur' });
  }
}
