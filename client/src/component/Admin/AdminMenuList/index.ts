import l from '@loadable/component';

const AdminMenuList = l(
  () => import(/* webpackChunkName: "admin-menu-list" */ './AdminMenuList'),
  loadable.options
) as unknown as typeof import('./AdminMenuList').default;

export { AdminMenuList };

export default AdminMenuList;

export * from './AdminMenuList.types';
