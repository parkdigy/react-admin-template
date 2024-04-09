import l from '@loadable/component';

const AdminUserForm = l(() => import('./AdminUserForm'));

export default AdminUserForm;

export { AdminUserForm };

export * from './AdminUserForm.types';
