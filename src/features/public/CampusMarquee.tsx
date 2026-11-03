const campuses = [
  'UNIVERSITAS GADJAH MADA',
  'UNIVERSITAS NEGERI YOGYAKARTA',
  'UIN SUNAN KALIJAGA',
  'UNIVERSITAS ISLAM INDONESIA',
  'UNIVERSITAS MUHAMMADIYAH YOGYAKARTA',
  'UNIVERSITAS AHMAD DAHLAN',
  'UPN VETERAN YOGYAKARTA',
  'ISI YOGYAKARTA',
];

export default function CampusMarquee() {
  return (
    <section className="border-b border-line bg-white py-6" aria-label="Jejaring kampus Daerah Istimewa Yogyakarta">
      <div className="page flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Sinergi 43 LDK se-Daerah Istimewa Yogyakarta
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
