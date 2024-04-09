import l from '@loadable/component';
import { loadable } from '@common';

const AdminUserLoginLogListDialog = l(() => import('./AdminUserLoginLogListDialog'), loadable.options);

export { AdminUserLoginLogListDialog };

export default AdminUserLoginLogListDialog;

export * from './AdminUserLoginLogListDialog.types';
