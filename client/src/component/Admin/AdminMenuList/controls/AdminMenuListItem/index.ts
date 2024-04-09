import l from '@loadable/component';
import { loadable } from '@common';

const AdminMenuListItem = l(() => import('./AdminMenuListItem'), loadable.options);

export { AdminMenuListItem };

export * from './AdminMenuListItem.types';
