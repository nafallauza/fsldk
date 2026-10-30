const campuses = ['ITB', 'UNPAD', 'UPI', 'TELKOM UNIVERSITY', 'UIN SGD', 'POLBAN'];

export default function CampusMarquee() {
  return <section className="border-b border-line bg-white py-7" aria-label="Jejaring kampus Bandung Raya">
    <ul className="page grid grid-cols-2 items-center gap-x-5 gap-y-6 text-center sm:grid-cols-3 xl:grid-cols-6">
      {campuses.map(campus => <li key={campus} className="text-sm font-semibold tracking-wide text-slate-500 sm:text-base">{campus}</li>)}
    </ul>
  </section>;
}
