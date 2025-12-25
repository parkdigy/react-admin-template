import l from '@loadable/component';

const AdminGroupList = l(
  () => import('./AdminGroupList'),
  loadable.options
) as unknown as typeof import('./AdminGroupList').default;

export { AdminGroupList };

export default AdminGroupList;

export * from './AdminGroupList.types';
