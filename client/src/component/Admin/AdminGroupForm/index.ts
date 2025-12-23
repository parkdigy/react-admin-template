import l from '@loadable/component';

const AdminGroupForm = l(
  () => import(/* webpackChunkName: "admin-group-form" */ './AdminGroupForm'),
  loadable.options
) as unknown as typeof import('./AdminGroupForm').default;

export { AdminGroupForm };

export default AdminGroupForm;

export * from './AdminGroupForm.types';
