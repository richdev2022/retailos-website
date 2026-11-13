export function LogosBar() {
  const categories = ['Grocery', 'Pharmacy', 'Electronics', 'Fashion', 'Cosmetics', 'Building Materials', 'General Merchandise'];
  return (
    <section className="border-y bg-slate-50">
      <div className="container-x py-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trusted by retailers across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((c) => (
            <span key={c} className="font-display text-base font-semibold text-slate-400">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
