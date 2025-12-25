import l from '@loadable/component';

const AdminMenuFormDialog = l(
  () => import('./AdminMenuFormDialog'),
  loadable.options
) as unknown as typeof import('./AdminMenuFormDialog').default;

export { AdminMenuFormDialog };

export default AdminMenuFormDialog;

export * from './AdminMenuFormDialog.types';
