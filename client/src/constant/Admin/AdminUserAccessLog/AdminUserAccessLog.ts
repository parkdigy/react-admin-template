/********************************************************************************************************************
 * 어드민 회원 접속 로그 API
 * ******************************************************************************************************************/

import { api } from '@common';
import { AdminUserAccessLogList, AdminUserAccessLogListRequestData } from './AdminUserAccessLog.types';

export default {
  // 접속 로그 목록
  list(data: AdminUserAccessLogListRequestData) {
    return api.get<AdminUserAccessLogList>('admin.user_access_log', data);
  },
  // 접속 로그 목록 엑셀 다운로드
  exportList(data: AdminUserAccessLogListRequestData) {
    api.export('admin.user_access_log', data);
  },
};
