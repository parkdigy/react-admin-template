/********************************************************************************************************************
 * 어드민 회원 로그인 로그 API
 * ******************************************************************************************************************/

import api from '@api';
import { AdminUserLoginLogListData, AdminUserLoginLogListRequestData } from './AdminUserLoginLog.types';

export default {
  // 로그인 로그 목록
  list(data: AdminUserLoginLogListRequestData) {
    return api.get<AdminUserLoginLogListData>('admin.login_log', data);
  },
  // 로그인 로그 목록 엑셀 다운로드
  exportList(data: AdminUserLoginLogListRequestData) {
    api.export('admin.login_log', data);
  },
};
