export type Role = 'admin' | 'ldk';
export type Status = 'Direncanakan' | 'Berjalan' | 'Selesai';
export type Activity = { id: string; ldkId: string; title: string; date: string; status: Status; report: string; documentation: string };
export function visibleActivities(activities: Activity[], role: Role, ldkId: string) {
  return role === 'admin' ? activities : activities.filter(a => a.ldkId === ldkId);
}
export function validateActivity(activity: Omit<Activity, 'id'>): string | null {
  if (!activity.title.trim() || !activity.ldkId || !/^\d{4}-\d{2}-\d{2}$/.test(activity.date)) return 'Lengkapi nama kegiatan, LDK, dan tanggal.';
  const parsedDate = new Date(`${activity.date}T00:00:00Z`);
  if (Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== activity.date) return 'Tanggal kegiatan tidak valid.';
  if (!['Direncanakan', 'Berjalan', 'Selesai'].includes(activity.status)) return 'Status kegiatan tidak valid.';
  if (activity.status === 'Selesai' && !activity.report.trim()) return 'Kegiatan selesai harus memiliki ringkasan laporan.';
  if (activity.documentation) {
    try { if (new URL(activity.documentation).protocol !== 'https:') return 'Gunakan tautan dokumentasi HTTPS.'; }
    catch { return 'Tautan dokumentasi tidak valid.'; }
  }
  return null;
}
