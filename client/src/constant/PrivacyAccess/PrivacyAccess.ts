import { api } from '@common';
import { PrivacyAccessInfo } from '@const';
import { AdminPrivacyAccessLogType } from '../Admin';

export default {
  Type: AdminPrivacyAccessLogType,

  info(data: Dict) {
    return api.get<PrivacyAccessInfo>('privacy_access', data);
  },
};
