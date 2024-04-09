import l from '@loadable/component';

const AdminUserAccessLogList = l(() => import('./AdminUserAccessLogList'));

export default AdminUserAccessLogList;

export { AdminUserAccessLogList };

export * from './AdminUserAccessLogList.types';
