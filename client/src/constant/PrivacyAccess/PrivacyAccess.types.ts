import { ApiResult } from '@api';

export interface PrivacyAccessInfoData {
  value: string;
}

export interface PrivacyAccessInfo extends ApiResult {
  data: PrivacyAccessInfoData;
}
