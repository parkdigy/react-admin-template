import l from '@loadable/component';

const AdminUserLoginLogList = l(
  () => import('./AdminUserLoginLogList'),
  loadable.options
) as unknown as typeof import('./AdminUserLoginLogList').default;

export { AdminUserLoginLogList };

export default AdminUserLoginLogList;

export * from './AdminUserLoginLogList.types';
