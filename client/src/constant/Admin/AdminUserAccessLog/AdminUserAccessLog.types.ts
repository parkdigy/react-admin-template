export interface AdminUserAccessLogListRequestData extends ApiPageLimitRequestData {
  keyword_option?: 'user_id' | 'email';
  keyword?: string;
  type?: 'VIEW' | 'EXPORT';
  search_date_from: string;
  search_date_to: string;
}

export interface AdminUserAccessLogListDataItem {
  id: number;
  email: string;
  type: string;
  title: string;
  url: string;
  admin_user_id: number;
  admin_user_access_key_id: string;
  create_date: string;
}

export type AdminUserAccessLogListData = AdminUserAccessLogListDataItem[];

export interface AdminUserAccessLogList extends ApiResult, ApiPaging {
  data: AdminUserAccessLogListData;
}
