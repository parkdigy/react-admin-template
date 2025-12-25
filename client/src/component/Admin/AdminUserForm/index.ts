import l from '@loadable/component';

const AdminUserForm = l(
  () => import('./AdminUserForm'),
  loadable.options
) as unknown as typeof import('./AdminUserForm').default;

export { AdminUserForm };

export default AdminUserForm;

export * from './AdminUserForm.types';
