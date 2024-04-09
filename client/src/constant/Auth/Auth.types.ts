import { ApiResult } from '@api';

export interface AuthInfo {
  email: string;
  is_super: boolean;
}

export interface AuthSignInResponseData extends ApiResult {
  data: AuthInfo;
}
