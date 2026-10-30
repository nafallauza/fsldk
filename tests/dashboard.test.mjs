import test from 'node:test';
import assert from 'node:assert/strict';
import { visibleActivities, validateActivity } from '../src/features/dashboard/model.ts';

const valid = { id: 'one', ldkId: 'itb', title: 'Kajian', date: '2026-11-14', status: 'Direncanakan', report: '', documentation: '' };
test('cakupan UI pengurus mengecualikan kegiatan kampus lain', () => {
  const activities = [valid, { ...valid, id: 'two', ldkId: 'unpad' }];
  assert.deepEqual(visibleActivities(activities, 'ldk', 'itb'), [valid]);
  assert.equal(visibleActivities(activities, 'admin', 'itb').length, 2);
  assert.deepEqual(visibleActivities(activities, 'ldk', 'unknown'), []);
});
test('status selesai membutuhkan ringkasan laporan', () => {
  assert.equal(validateActivity(valid), null);
  assert.match(validateActivity({ ...valid, status: 'Selesai', report: '  ' }), /laporan/);
  assert.equal(validateActivity({ ...valid, status: 'Selesai', report: 'Terlaksana' }), null);
});
test('tanggal kalender dan status harus valid', () => {
  assert.match(validateActivity({ ...valid, date: '2026-02-30' }), /Tanggal/);
  assert.match(validateActivity({ ...valid, date: '2026-13-01' }), /Tanggal/);
  assert.match(validateActivity({ ...valid, status: 'unknown' }), /Status/);
});
test('dokumentasi menolak protokol berbahaya dan URL tidak valid', () => {
  for (const documentation of ['javascript:alert(1)', 'data:text/html,test', 'http://example.com', 'bukan-url']) {
    assert.ok(validateActivity({ ...valid, documentation }));
  }
  assert.equal(validateActivity({ ...valid, documentation: 'https://example.com/foto' }), null);
});
