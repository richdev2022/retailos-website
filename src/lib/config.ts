// Configuration: where should Login / Get Started point to?
export const WEBAPP_URL = (import.meta.env.VITE_WEBAPP_URL as string | undefined) ?? 'https://app.retailos.com';

export const LOGIN_URL = `${WEBAPP_URL}/login`;
export const REGISTER_URL = `${WEBAPP_URL}/register`;

// Anchor links for in-page navigation
export const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Why RetailOS', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
];
