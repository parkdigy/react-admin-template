/********************************************************************************************************************
 * 어드민 회원 API
 * ******************************************************************************************************************/

import {
  type AdminUserInfo,
  type AdminUserList,
  type AdminUserMenuList,
  type AdminUserAllList,
} from './AdminUser.types';

import AdminUserLoginLog from './AdminUserLoginLog';

export default {
  LoginLog: AdminUserLoginLog,

  // 회원 메뉴 목록
  menuList() {
    return api.get<AdminUserMenuList>('admin.user_menu');
  },
  // 회원 목록
  list(data: Dict) {
    return api.get<AdminUserList>('admin.user', data);
  },
  // 회원 목록 엑셀 다운로드
  exportList(data: Dict) {
    api.export('admin.user', data);
  },
  // 전체 회원 목록
  allList(data?: Dict) {
    return api.get<AdminUserAllList>('admin.user', { type: 'all', ...data });
  },
  // 회원 정보
  info(id: number) {
    return api.get<AdminUserInfo>(`admin.user.${id}`);
  },
  // 회원 등록
  add(auth: ApiAuth, data: Dict) {
    return api.post(auth, 'admin.user', data);
  },
  // 회원 수정
  edit(auth: ApiAuth, id: number, data: Dict) {
    return api.patch(auth, `admin.user.${id}`, data);
  },
  // 회원 잠금
  lock(auth: ApiAuth, id: number) {
    return api.patch(auth, `admin.user.${id}.lock`);
  },
  // 회원 잠금 해제
  unlock(auth: ApiAuth, id: number) {
    return api.patch(auth, `admin.user.${id}.unlock`);
  },
  // 회원 비밀번호 초기화
  passwordReset(auth: ApiAuth, id: number) {
    return api.patch(auth, `admin.user.${id}.password_reset`);
  },
};
