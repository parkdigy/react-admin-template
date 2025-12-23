import l from '@loadable/component';

const AdminUserFormDialog = l(
  () => import(/* webpackChunkName: "admin-user-form-dialog" */ './AdminUserFormDialog'),
  loadable.options
) as unknown as typeof import('./AdminUserFormDialog').default;

export { AdminUserFormDialog };

export default AdminUserFormDialog;

export * from './AdminUserFormDialog.types';
