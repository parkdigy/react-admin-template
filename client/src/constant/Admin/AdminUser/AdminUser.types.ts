import { ApiPaging, ApiResult } from '@common';
import { DateString } from '@types';

/********************************************************************************************************************
 * menu list
 * ******************************************************************************************************************/

export interface AdminUserMenuInfo {
  id: string;
  name: string;
  depth: number;
  uri?: string;
  icon?: string;
  read: boolean;
  write: boolean;
  export: boolean;
  items?: AdminUserMenuInfo[];
}

export interface AdminUserMenuList extends ApiResult {
  data: AdminUserMenuInfo[];
}

/********************************************************************************************************************
 * list
 * ******************************************************************************************************************/

export interface AdminUserListDataItem {
  id: number;
  email: string;
  name: string;
  tel: string;
  admin_group_id: number | null;
  admin_group_name: string | null;
  is_lock: boolean;
  login_fail_count: number;
  must_password_change: boolean;
  create_date: string;
  editable: boolean;
}

export type AdminUserListData = AdminUserListDataItem[];

export interface AdminUserList extends ApiResult, ApiPaging {
  data: AdminUserListData;
}

/********************************************************************************************************************
 * all list
 * ******************************************************************************************************************/

export interface AdminUserAllListDataItem {
  id: number;
  name: string;
  email: string;
  admin_group_id: number | null;
  admin_group_name: string | null;
}

export type AdminUserAllListData = AdminUserAllListDataItem[];

export interface AdminUserAllList extends ApiResult {
  data: AdminUserAllListData;
}

/********************************************************************************************************************
 * info
 * ******************************************************************************************************************/

export interface AdminUserInfoData {
  id: number;
  email: string;
  name: string;
  admin_group_id: number | null;
  admin_group_name: string | null;
  tel: string;
  is_lock: boolean;
  create_date: DateString;
  editable: boolean;
}

export interface AdminUserInfo extends ApiResult {
  data: AdminUserInfoData;
}
