const STATS = [
  { value: '1,200+', label: 'Businesses onboarded' },
  { value: '\u20A618.7M', label: 'Monthly recurring revenue' },
  { value: '99.5%', label: 'Platform uptime' },
  { value: '<500ms', label: 'API response (p95)' },
];

export function Stats() {
  return (
    <section className="bg-ink-900 py-16">
      <div className="container-x">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-brand-400">{s.value}</p>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
