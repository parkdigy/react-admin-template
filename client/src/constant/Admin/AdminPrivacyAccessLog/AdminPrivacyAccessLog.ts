import { api } from '@common';
import { AdminPrivacyAccessLogList, AdminPrivacyAccessLogTypeList } from './AdminPrivacyAccessLog.types';
import AdminPrivacyAccessLogType from './AdminPrivacyAccessLogType';

export default {
  Type: AdminPrivacyAccessLogType,

  // 구분 목록
  typeList() {
    return api.get<AdminPrivacyAccessLogTypeList>('admin.privacy_access_log.type');
  },
  // 목록
  list(data: Dict) {
    return api.get<AdminPrivacyAccessLogList>('admin.privacy_access_log', data);
  },
  // 목록 엑셀 다운로드
  exportList(data: Dict) {
    api.export('admin.privacy_access_log', data);
  },
};
