import { ApiResult } from '@api';

/********************************************************************************************************************
 * list
 * ******************************************************************************************************************/

export interface AdminGroupListRequestData {
  is_lock?: boolean;
}

export interface AdminGroupListDataItem {
  id: number;
  name: string;
  is_lock: boolean;
  is_privacy_access: boolean;
  user_count: number;
  editable: boolean;
}

export type AdminGroupListData = AdminGroupListDataItem[];

export interface AdminGroupList extends ApiResult {
  data: AdminGroupListData;
}

/********************************************************************************************************************
 * info
 * ******************************************************************************************************************/

export interface AdminGroupInfoData {
  info: {
    id: number;
    name: string;
    is_lock: boolean;
    is_privacy_access: boolean;
    editable: boolean;
  };
  users: number[];
}

export interface AdminGroupInfo extends ApiResult {
  data: AdminGroupInfoData;
}

/********************************************************************************************************************
 * menu list
 * ******************************************************************************************************************/

export interface AdminGroupMenuListRequestData {
  admin_group_id?: number;
}

export interface AdminGroupMenuListDataItemBase {
  id: string;
  name: string;
  depth: number;
  parent_id?: string;
  uri?: string;
  is_super_admin_menu: boolean;
  is_all_user_menu: boolean;
  icon?: string;
  read?: boolean;
  write?: boolean;
  export?: boolean;
  new_read?: boolean;
  new_write?: boolean;
  new_export?: boolean;
}

export interface AdminGroupMenuListDataItem extends AdminGroupMenuListDataItemBase {
  items?: AdminGroupMenuListDataItemBase[];
}

export type AdminGroupMenuListData = AdminGroupMenuListDataItem[];

export interface AdminGroupMenuList extends ApiResult {
  data: AdminGroupMenuListData;
}
