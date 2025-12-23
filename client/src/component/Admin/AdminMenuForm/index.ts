import l from '@loadable/component';

const AdminMenuForm = l(
  () => import(/* webpackChunkName: "admin-menu-form" */ './AdminMenuForm'),
  loadable.options
) as unknown as typeof import('./AdminMenuForm').default;

export { AdminMenuForm };

export default AdminMenuForm;

export * from './AdminMenuForm.types';
