/********************************************************************************************************************
 * 인증 API
 * ******************************************************************************************************************/

import { api } from '@common';
import { ApiRequestData } from '@pdg/api';
import { AuthSignInResponseData } from './Auth.types';

export default {
  // 로그인 정보
  info() {
    return api.get<AuthSignInResponseData>('auth.signin');
  },
  // 로그인
  signIn(data: ApiRequestData, silent = true) {
    return api.notAuthPost<AuthSignInResponseData>('auth.signin', data, { silent });
  },
  // 로그아웃
  signOut() {
    return api.notAuthPost('auth.signout');
  },
};
