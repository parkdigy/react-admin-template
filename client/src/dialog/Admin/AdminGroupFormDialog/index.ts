import l from '@loadable/component';

const AdminGroupFormDialog = l(
  () => import(/* webpackChunkName: "admin-group-form-dialog" */ './AdminGroupFormDialog'),
  loadable.options
) as unknown as typeof import('./AdminGroupFormDialog').default;

export { AdminGroupFormDialog };

export default AdminGroupFormDialog;

export * from './AdminGroupFormDialog.types';
