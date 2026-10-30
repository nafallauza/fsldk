const campuses = [
  'UIN SUNAN GUNUNG DJATI',
  'ITB',
  'UNIVERSITAS PADJADJARAN',
  'UPI BANDUNG',
  'TELKOM UNIVERSITY',
  'POLBAN',
  'UNISBA',
  'UNPAS',
];

export default function CampusMarquee() {
  return (
    <section className="border-b border-line bg-white py-6" aria-label="Jejaring kampus Bandung Raya">
      <div className="page flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Sinergi 43 LDK se-Bandung Raya
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold tracking-wider text-slate-600 sm:text-sm">
          {campuses.map(campus => (
            <li key={campus} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-royal/60" aria-hidden="true" />
              {campus}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
