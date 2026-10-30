import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { issues, dateLabel } from '../../data/demo';

export default function IssueSection() {
  return <section className="page section-space border-t border-line">
    <div className="section-heading"><h2>Suara dari ruang kampus.</h2><Link className="text-link" to="/issues">Semua tulisan <ArrowRight size={17} /></Link></div>
    <div className="grid gap-6 md:grid-cols-2">{issues.slice(0, 2).map(issue => <article key={issue.slug} className="flex flex-col rounded-xl border border-line bg-white p-6 sm:p-8">
      <p className="text-sm text-muted">{issue.category} · {dateLabel(issue.date)}</p>
      <h3 className="mb-4 mt-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"><Link className="hover:text-royal" to={`/i/${issue.slug}`}>{issue.title}</Link></h3>
      <p className="mb-6 max-w-xl text-sm leading-7 text-muted">{issue.excerpt}</p>
      <Link className="text-link mt-auto self-start" to={`/i/${issue.slug}`}>Baca tulisan <ArrowUpRight size={17} /></Link>
    </article>)}</div>
  </section>;
}
