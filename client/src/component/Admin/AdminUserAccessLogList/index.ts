import l from '@loadable/component';

const AdminUserAccessLogList = l(
  () => import('./AdminUserAccessLogList'),
  loadable.options
) as unknown as typeof import('./AdminUserAccessLogList').default;

export { AdminUserAccessLogList };

export default AdminUserAccessLogList;

export * from './AdminUserAccessLogList.types';
