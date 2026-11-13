import { Check, ArrowRight } from 'lucide-react';
import { REGISTER_URL } from '../lib/config';

const PLANS = [
  {
    name: 'Free',
    price: '\u20A60',
    interval: '/mo',
    description: 'For small shops getting started',
    popular: false,
    features: ['50 products', '1 staff member', '1 branch', 'POS & barcode scanning', 'Stock management', 'Basic reports', '14-day trial of Pro features'],
    cta: 'Start free',
  },
  {
    name: 'Pro',
    price: '\u20A615,000',
    interval: '/mo',
    description: 'For growing retailers',
    popular: true,
    features: ['Unlimited products', '1 staff member', '1 branch', 'Everything in Free', 'Advanced reports', 'Cloud sync', 'Data export', '14-day trial'],
    cta: 'Start Pro trial',
  },
  {
    name: 'Business',
    price: '\u20A645,000',
    interval: '/mo',
    description: 'For multi-staff operations',
    popular: false,
    features: ['Unlimited products', '5 staff members', '1 branch', 'Everything in Pro', 'Multi-user permissions', 'Priority support'],
    cta: 'Start Business trial',
  },
  {
    name: 'Enterprise',
    price: '\u20A6120,000',
    interval: '/mo',
    description: 'For multi-branch chains',
    popular: false,
    features: ['Unlimited products', 'Configurable staff', 'Multiple branches', 'Everything in Business', 'Branch analytics', 'Dedicated account manager'],
    cta: 'Contact sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Plans for every stage of your business
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Start free, upgrade when you grow. All plans include POS, inventory and barcode scanning.
            No card required. Cancel anytime.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-6 transition-all ${
                plan.popular ? 'border-brand-500 shadow-xl lg:scale-105' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-ink-900">{plan.name}</h3>
              <p className="mt-1 text-xs text-ink-700">{plan.description}</p>
              <div className="mt-4">
                <span className="font-display text-3xl font-bold text-ink-900">{plan.price}</span>
                <span className="text-sm text-ink-700">{plan.interval}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REGISTER_URL}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-slate-300 text-ink-900 hover:bg-slate-50'
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-700">
          Prices are illustrative and may be adjusted based on market validation. NGN pricing shown.
        </p>
      </div>
    </section>
  );
}
