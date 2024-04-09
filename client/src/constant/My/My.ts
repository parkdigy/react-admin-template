/********************************************************************************************************************
 * 내 정보 API
 * ******************************************************************************************************************/

import api from '@api';
import { MyPasswordChangeRequestData } from '@const';

export default {
  // 비밀번호 초기화
  passwordChange(authIntro: ReactNode, data: MyPasswordChangeRequestData) {
    return api.patch(authIntro, 'my.password', data);
  },
};
