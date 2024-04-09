/********************************************************************************************************************
 * 어드민 회원 API
 * ******************************************************************************************************************/

import api from '@api';
import { AdminUserInfo, AdminUserList, AdminUserMenuList, AdminUserAllList } from './AdminUser.types';

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
  add(authIntro: ReactNode, data: Dict) {
    return api.post(authIntro, 'admin.user', data);
  },
  // 회원 수정
  edit(authIntro: ReactNode, id: number, data: Dict) {
    return api.patch(authIntro, `admin.user.${id}`, data);
  },
  // 회원 잠금
  lock(authIntro: ReactNode, id: number) {
    return api.patch(authIntro, `admin.user.${id}.lock`);
  },
  // 회원 잠금 해제
  unlock(authIntro: ReactNode, id: number) {
    return api.patch(authIntro, `admin.user.${id}.unlock`);
  },
  // 회원 비밀번호 초기화
  passwordReset(authIntro: ReactNode, id: number) {
    return api.patch(authIntro, `admin.user.${id}.password_reset`);
  },
};
