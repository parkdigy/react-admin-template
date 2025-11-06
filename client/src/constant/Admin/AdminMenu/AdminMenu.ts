/********************************************************************************************************************
 * 어드민 메뉴 API
 * ******************************************************************************************************************/

import { api } from '@common';
import { AdminMenuInfo, AdminMenuList } from './AdminMenu.types';

export default {
  // 메뉴 목록
  list() {
    return api.get<AdminMenuList>('admin.menu');
  },
  // 메뉴 정보
  info(id: string) {
    return api.get<AdminMenuInfo>(`admin.menu.${id.replace(/\//g, '_____')}`);
  },
  // 메뉴 등록
  add(auth: ReactNode, data: Dict) {
    return api.post(auth, 'admin.menu', data);
  },
  // 메뉴 수정
  edit(auth: ReactNode, id: string, data: Dict) {
    return api.patch(auth, `admin.menu.${id.replace(/\//g, '_____')}`, data);
  },
  // 메뉴 SUPER 권한 수정
  editSuper(id: string, isSuperAdminMenu: boolean) {
    return api.notAuthPatch(
      `admin.menu.${id.replace(/\//g, '_____')}.super`,
      {
        is_super_admin_menu: isSuperAdminMenu,
      },
      { silent: true }
    );
  },
  // 메뉴 ALL 권한 수정
  editAll(id: string, isAllUserMenu: boolean) {
    return api.notAuthPatch(
      `admin.menu.${id.replace(/\//g, '_____')}.all`,
      {
        is_all_user_menu: isAllUserMenu,
      },
      { silent: true }
    );
  },
  // 메뉴 노출 순서 저장
  editSeq(data: string) {
    return api.notAuthPatch('admin.menu.seq', { data });
  },
  // 메뉴 삭제
  remove(auth: ReactNode, id: string) {
    return api.delete(auth, `admin.menu.${id.replace(/\//g, '_____')}`);
  },
};
