import { DateString } from '@types';

export interface AdminUserLoginLogListRequestData extends ApiPageLimitRequestData {
  keyword_option?: 'all' | 'email' | 'ip' | 'location';
  keyword?: string;
  login_date_from?: string;
  login_date_to?: string;
}

export interface AdminUserLoginLogListDataItem {
  id: number;
  admin_user_id: number;
  ip_address: string;
  ip_country: string;
  ip_city: string;
  create_date: DateString;
  email: string;
  name: string;
}

export interface AdminUserLoginLogListData extends ApiResult, ApiPaging {
  data: AdminUserLoginLogListDataItem[];
}
