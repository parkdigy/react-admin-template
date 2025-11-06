import { ApiResult } from '@common';

export interface AuthInfo {
  email: string;
  is_super: boolean;
}

export interface AuthSignInResponseData extends ApiResult {
  data: AuthInfo;
}
