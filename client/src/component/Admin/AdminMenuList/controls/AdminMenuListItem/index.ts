import l from '@loadable/component';

const AdminMenuListItem = l(
  () => import(/* webpackChunkName: "admin-menu-list-item" */ './AdminMenuListItem'),
  loadable.options
) as unknown as typeof import('./AdminMenuListItem').default;

export { AdminMenuListItem };

export default AdminMenuListItem;

export * from './AdminMenuListItem.types';
