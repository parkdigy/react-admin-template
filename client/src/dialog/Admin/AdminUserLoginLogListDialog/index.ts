import l from '@loadable/component';

const AdminUserLoginLogListDialog = l(
  () => import('./AdminUserLoginLogListDialog'),
  loadable.options
) as unknown as typeof import('./AdminUserLoginLogListDialog').default;

export { AdminUserLoginLogListDialog };

export default AdminUserLoginLogListDialog;

export * from './AdminUserLoginLogListDialog.types';
