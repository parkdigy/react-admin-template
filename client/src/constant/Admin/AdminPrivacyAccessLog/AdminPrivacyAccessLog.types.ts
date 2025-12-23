/********************************************************************************************************************
 * 구분 목록
 * ******************************************************************************************************************/

export interface AdminPrivacyAccessLogTypeListDataItem {
  type: string;
  name: string;
}

export type AdminPrivacyAccessLogTypeListData = AdminPrivacyAccessLogTypeListDataItem[];

export interface AdminPrivacyAccessLogTypeList extends ApiResult {
  data: AdminPrivacyAccessLogTypeListData;
}
/********************************************************************************************************************
 * 목록
 * ******************************************************************************************************************/

export interface AdminPrivacyAccessLogListDataItem {
  id: number;
  admin_user_id: number;
  type: string;
  type_name: string;
  reason: string;
  parent_id: number;
  create_date: DateString;
  admin_user_name: string;
}

export type AdminPrivacyAccessLogListData = AdminPrivacyAccessLogListDataItem[];

export interface AdminPrivacyAccessLogList extends ApiResult, ApiPaging {
  data: AdminPrivacyAccessLogListData;
}
