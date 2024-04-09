import l from '@loadable/component';
import { loadable } from '@common';

const AdminGroupFormDialog = l(() => import('./AdminGroupFormDialog'), loadable.options);

export { AdminGroupFormDialog };

export default AdminGroupFormDialog;

export * from './AdminGroupFormDialog.types';
