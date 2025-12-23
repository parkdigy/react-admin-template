import l from '@loadable/component';

const AdminUserList = l(
  () => import(/* webpackChunkName: "admin-user-list" */ './AdminUserList'),
  loadable.options
) as unknown as typeof import('./AdminUserList').default;

export { AdminUserList };

export default AdminUserList;

export * from './AdminUserList.types';
