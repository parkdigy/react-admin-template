/********************************************************************************************************************
 * 어드민 그룹 API
 * ******************************************************************************************************************/

import api, { ApiResult } from '@api';
import {
  AdminGroupInfo,
  AdminGroupList,
  AdminGroupListRequestData,
  AdminGroupMenuList,
  AdminGroupMenuListRequestData,
} from './AdminGroup.types';

export default {
  // 그룹 목록
  list(data?: AdminGroupListRequestData) {
    return api.get<AdminGroupList>('admin.group', data);
  },
  // 그룹 정보
  info(id: number) {
    return api.get<AdminGroupInfo>(`admin.group.${id}`);
  },
  // 그룹 메뉴 목록
  async menuList(data?: AdminGroupMenuListRequestData) {
    const result = await api.get<AdminGroupMenuList>('admin.user_menu.group', data);

    result.data?.forEach((item) => {
      item.read = !!item.read;
      item.write = !!item.write;
      item.export = !!item.export;

      item.new_read = item.read;
      item.new_write = item.write;
      item.new_export = item.export;

      item.items?.forEach((subItem) => {
        subItem.read = !!subItem.read;
        subItem.write = !!subItem.write;
        subItem.export = !!subItem.export;

        subItem.new_read = subItem.read;
        subItem.new_write = subItem.write;
        subItem.new_export = subItem.export;
      });
    });

    return result;
  },
  // 그룹 등록
  add(authIntro: ReactNode, data: Dict) {
    return api.post<ApiResult>(authIntro, 'admin.group', data);
  },
  // 그룹 수정
  edit(authIntro: ReactNode, id: number, data: Dict) {
    return api.patch<ApiResult>(authIntro, `admin.group.${id}`, data);
  },
};
