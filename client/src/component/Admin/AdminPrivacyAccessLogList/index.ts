import l from '@loadable/component';

const AdminPrivacyAccessLogList = l(
  () => import('./AdminPrivacyAccessLogList'),
  loadable.options
) as unknown as typeof import('./AdminPrivacyAccessLogList').default;

export { AdminPrivacyAccessLogList };

export default AdminPrivacyAccessLogList;

export * from './AdminPrivacyAccessLogList.types';
