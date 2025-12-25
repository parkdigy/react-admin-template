import l from '@loadable/component';

const AdminUserFormDialog = l(
  () => import('./AdminUserFormDialog'),
  loadable.options
) as unknown as typeof import('./AdminUserFormDialog').default;

export { AdminUserFormDialog };

export default AdminUserFormDialog;

export * from './AdminUserFormDialog.types';
