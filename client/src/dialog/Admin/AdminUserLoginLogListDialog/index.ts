import l from '@loadable/component';

const AdminUserLoginLogListDialog = l(
  () => import(/* webpackChunkName: "admin-user-login-log-list-dialog" */ './AdminUserLoginLogListDialog'),
  loadable.options
) as unknown as typeof import('./AdminUserLoginLogListDialog').default;

export { AdminUserLoginLogListDialog };

export default AdminUserLoginLogListDialog;

export * from './AdminUserLoginLogListDialog.types';
