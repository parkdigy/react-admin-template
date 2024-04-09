import l from '@loadable/component';
import { loadable } from '@common';

const AdminUserList = l(() => import('./AdminUserList'), loadable.options);

export { AdminUserList };

export * from './AdminUserList.types';
