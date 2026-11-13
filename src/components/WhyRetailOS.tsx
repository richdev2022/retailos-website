import { CheckCircle2, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const REASONS = [
  {
    icon: TrendingUp,
    title: 'Grow revenue',
    description: 'Faster POS checkout, low-stock alerts and product performance insights help you stock what sells and never miss a sale.',
  },
  {
    icon: Clock,
    title: 'Save time',
    description: 'Automated inventory valuation, instant receipts and real-time reports eliminate hours of manual bookkeeping.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce losses',
    description: 'Immutable movement ledger, role-based access and audit logs make every unit of stock traceable to a person.',
  },
];

const CHECKPOINTS = [
  'Accurate COGS, gross profit and operating profit on every sale',
  'Customer credit tracked separately from collected cash',
  'Concurrent sales cannot create inconsistent balances',
  'Idempotency keys prevent duplicate offline transactions',
  'Multi-tenant isolation enforced server-side on every query',
  'All monetary values stored as integer minor units (no floats)',
];

export function WhyRetailOS() {
  return (
    <section id="why" className="bg-slate-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Why RetailOS</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Built for the realities of African retail
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              We obsess over the numbers so you don't have to. Every kobo is accounted for,
              every unit is traceable, and every sale is reconcilable.
            </p>
            <div className="mt-8 space-y-3">
              {CHECKPOINTS.map((cp) => (
                <div key={cp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-ink-700">{cp}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink-700">{r.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
