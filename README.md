## RapidFlow Plumbing Website

This is a single-page marketing and lead capture site for **RapidFlow Plumbing**, built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui. It includes a contact form that sends requests to your inbox via a Supabase Edge Function and the Resend email API.

### Prerequisites

- Node.js (LTS recommended)
- npm

Optional (for the serverless function):
- A Supabase project
- A Resend account and API key

### Install & Run (frontend)

```bash
npm install
npm run dev
```

The app will start on `http://localhost:8080` (configured in `vite.config.ts`).

### Environment Configuration

Frontend (`src/integrations/supabase/client.ts`) expects:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

You can set these in a `.env` file at the project root:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### Contact Form Email (Supabase Edge Function)

The contact form calls the Supabase Edge Function in `supabase/functions/send-contact-email/index.ts`.  
By default, it sends emails to:

- `ashutoshthakur713@gmail.com`

You can override the recipient by setting this environment variable in your Supabase project:

- `CONTACT_RECIPIENT_EMAIL`

The function also requires:

- `RESEND_API_KEY` – your Resend API key

To deploy the function (from the project root, with Supabase CLI installed and logged in):

```bash
supabase functions deploy send-contact-email
```

### Build for Production

```bash
npm run build
```

This generates a production build in the `dist` folder that you can deploy with any static hosting provider or via your own infrastructure.
