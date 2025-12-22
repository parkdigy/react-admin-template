/********************************************************************************************************************
 * list
 * ******************************************************************************************************************/

export interface AdminMenuListDataItem {
  id: string;
  name: string;
  depth: number;
  parent_id: string | null;
  uri: string | null;
  is_super_admin_menu: boolean;
  is_all_user_menu: boolean;
  icon: string | null;
  editable: boolean;
  items: AdminMenuListDataItem[];
}

export type AdminMenuListData = AdminMenuListDataItem[];

export interface AdminMenuList extends ApiResult, ApiPaging {
  data: AdminMenuListData;
}

/********************************************************************************************************************
 * info
 * ******************************************************************************************************************/

export interface AdminMenuInfoData {
  id: string;
  name: string;
  depth: number;
  uri: string | null;
  is_super_admin_menu: boolean;
  is_all_user_menu: boolean;
  icon: string | null;
  parent?: AdminMenuInfoData;
}

export interface AdminMenuInfo extends ApiResult {
  data: AdminMenuInfoData;
}
