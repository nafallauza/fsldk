import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import PublicLayout from './PublicLayout';
import Home from '../features/public/Home';
import { About, Contact, NotFound } from '../features/public/Pages';
import Events, { EventDetail } from '../features/events/Events';
import Issues, { IssueDetail } from '../features/issues/Issues';

const DashboardLayout = lazy(() => import('../features/dashboard/DashboardLayout'));
const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));
const Activities = lazy(() => import('../features/dashboard/Dashboard').then(m => ({ default: m.Activities })));
const Directory = lazy(() => import('../features/dashboard/Dashboard').then(m => ({ default: m.Directory })));
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { document.title = `${pathname.startsWith('/dashboard') ? 'Portal Monitoring' : pathname.startsWith('/events') || pathname.startsWith('/e/') ? 'Agenda' : pathname.startsWith('/issues') || pathname.startsWith('/i/') ? 'Isu & Opini' : pathname === '/contact' ? 'Kontak' : pathname === '/about' ? 'Tentang Kami' : 'FSLDK Bandung Raya — Merajut Ukhuwah'} | FSLDK`; }, [pathname]);
  return <Suspense fallback={<p role="status" className="page py-16">Memuat halaman…</p>}><Routes>
    <Route element={<PublicLayout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="events" element={<Events />} /><Route path="e/:slug" element={<EventDetail />} /><Route path="issues" element={<Issues />} /><Route path="i/:slug" element={<IssueDetail />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route>
    <Route path="dashboard" element={<DashboardLayout />}><Route index element={<Dashboard />} /><Route path="activities" element={<Activities />} /><Route path="ldks" element={<Directory />} /><Route path="*" element={<NotFound />} /></Route>
  </Routes></Suspense>;
}
