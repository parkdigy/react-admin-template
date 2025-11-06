import { ApiResult } from '@common';

export interface PrivacyAccessInfoData {
  value: string;
}

export interface PrivacyAccessInfo extends ApiResult {
  data: PrivacyAccessInfoData;
}
