import l from '@loadable/component';

const AdminMenuListItem = l(
  () => import('./AdminMenuListItem'),
  loadable.options
) as unknown as typeof import('./AdminMenuListItem').default;

export { AdminMenuListItem };

export default AdminMenuListItem;

export * from './AdminMenuListItem.types';
