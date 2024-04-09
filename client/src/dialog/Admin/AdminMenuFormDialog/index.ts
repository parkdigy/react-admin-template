import l from '@loadable/component';
import { loadable } from '@common';

const AdminMenuFormDialog = l(() => import('./AdminMenuFormDialog'), loadable.options);

export { AdminMenuFormDialog };

export default AdminMenuFormDialog;

export * from './AdminMenuFormDialog.types';
