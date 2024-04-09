import l from '@loadable/component';

const AdminGroupForm = l(() => import('./AdminGroupForm'));

export default AdminGroupForm;

export { AdminGroupForm };

export * from './AdminGroupForm.types';
