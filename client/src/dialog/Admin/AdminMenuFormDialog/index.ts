import l from '@loadable/component';

const AdminMenuFormDialog = l(
  () => import(/* webpackChunkName: "admin-menu-form-dialog" */ './AdminMenuFormDialog'),
  loadable.options
) as unknown as typeof import('./AdminMenuFormDialog').default;

export { AdminMenuFormDialog };

export default AdminMenuFormDialog;

export * from './AdminMenuFormDialog.types';
