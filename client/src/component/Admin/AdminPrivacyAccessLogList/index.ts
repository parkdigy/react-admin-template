import l from '@loadable/component';
import { loadable } from '@common';

const AdminPrivacyAccessLogList = l(() => import('./AdminPrivacyAccessLogList'), loadable.options);

export { AdminPrivacyAccessLogList };

export default AdminPrivacyAccessLogList;

export * from './AdminPrivacyAccessLogList.types';
