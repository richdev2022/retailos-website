import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'Do I need the internet to use RetailOS?', a: 'No. Critical retail operations — selling, scanning barcodes, recording expenses and viewing locally synced products — work offline. Your transactions are queued locally and synchronize automatically when you reconnect.' },
  { q: 'Can I use RetailOS on both phone and computer?', a: 'Yes. RetailOS has a Flutter mobile app for Android and a React web app. Both have full feature parity and share the same backend, so changes made on one platform appear on the other after sync.' },
  { q: 'How accurate is profit calculation?', a: 'Every sale preserves the cost basis at the time of transaction (Weighted Average Cost). Net sales, COGS, gross profit, operating expenses and operating profit are calculated server-side using fixed-precision integer arithmetic — no floating-point money.' },
  { q: 'What payment methods can I record?', a: 'Cash, bank transfer, card / POS terminal, customer credit and other. RetailOS records what your cashier confirms — it does not claim to have received money through a bank or card API. Subscription payments are verified manually via bank transfer.' },
  { q: 'Can I manage multiple branches?', a: 'Yes. Multi-branch support includes per-branch inventory, sales, staff and reports. You can transfer stock between branches (creating linked stock-out and stock-in movements under one transfer reference) and compare branch performance.' },
  { q: 'What happens when my subscription expires?', a: 'You retain read access to historical records under a defined grace period. Your business data is never automatically deleted. You can resubscribe at any time to restore full functionality.' },
  { q: 'How do I pay for a paid plan?', a: 'Choose a plan, generate a payment reference, make a bank transfer outside the app, then submit the reference and proof. Our finance team verifies and activates your subscription. We are reviewing app-store payment policies before launching external payment instructions for digital subscriptions.' },
  { q: 'Is my business data private?', a: 'Yes. Every business-owned record is tenant-scoped and authorized server-side. Platform administrators do not automatically have access to your financial records. Any exceptional support access is explicitly authorized and fully audited.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Questions, answered
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium text-ink-900">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-ink-700">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
