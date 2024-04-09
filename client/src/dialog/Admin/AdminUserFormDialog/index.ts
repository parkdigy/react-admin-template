import l from '@loadable/component';
import { loadable } from '@common';

const AdminUserFormDialog = l(() => import('./AdminUserFormDialog'), loadable.options);

export { AdminUserFormDialog };

export default AdminUserFormDialog;

export * from './AdminUserFormDialog.types';
