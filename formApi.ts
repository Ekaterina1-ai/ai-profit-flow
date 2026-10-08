export type LeadPayload = {
  name: string;
  phone: string;
  service?: string;
};

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xdeaervd';

/** Sends lead to Formspree (works on GitHub Pages without our Node server). */
export async function sendLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      phone: payload.phone,
      ...(payload.service ? { service: payload.service } : {}),
      _subject: payload.service
        ? `Заявка AI Profit Flow: ${payload.service}`
        : 'Новая заявка с сайта AI Profit Flow',
    }),
  });

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
    errors?: { message?: string }[];
  };

  if (!response.ok) {
    const message =
      (typeof data.error === 'string' && data.error) ||
      data.errors?.[0]?.message ||
      `HTTP ${response.status}`;
    throw new Error(message);
  }
}
