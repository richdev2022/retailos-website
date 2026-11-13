// Configuration: where should Login / Get Started point to?
// All values come from Vite env vars (set in .env or your hosting dashboard).

/** Web app URL (dashboard / POS / inventory UI). Login & Get Started redirect here. */
export const WEBAPP_URL = (import.meta.env.VITE_WEBAPP_URL as string | undefined) ?? 'https://app.retailos.com';

/** Backend API URL (currently unused on the marketing site, but exposed for future use). */
export const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'https://api.retailos.com';

/** Admin portal URL (used in footer / contact links). */
export const ADMIN_URL = (import.meta.env.VITE_ADMIN_URL as string | undefined) ?? 'https://admin.retailos.com';

export const LOGIN_URL = `${WEBAPP_URL}/login`;
export const REGISTER_URL = `${WEBAPP_URL}/register`;

// Anchor links for in-page navigation
export const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Why RetailOS', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
];
