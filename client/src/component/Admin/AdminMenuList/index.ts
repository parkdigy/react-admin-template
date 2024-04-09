import l from '@loadable/component';
import { loadable } from '@common';

const AdminMenuList = l(() => import('./AdminMenuList'), loadable.options);

export { AdminMenuList };

export * from './AdminMenuList.types';
