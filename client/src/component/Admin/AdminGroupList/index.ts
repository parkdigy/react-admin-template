import l from '@loadable/component';

const AdminGroupList = l(
  () => import(/* webpackChunkName: "admin-group-list" */ './AdminGroupList'),
  loadable.options
) as unknown as typeof import('./AdminGroupList').default;

export { AdminGroupList };

export default AdminGroupList;

export * from './AdminGroupList.types';
