import l from '@loadable/component';

const AdminGroupList = l(() => import('./AdminGroupList'));

export default AdminGroupList;

export { AdminGroupList };

export * from './AdminGroupList.type';
