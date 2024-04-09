import { AuthInfo } from '@const';

export interface AppAuthInfo extends AuthInfo {}

export interface AppContextValue {
  auth?: AppAuthInfo; // 어드민 인증 정보
  setAuth(auth: AppAuthInfo): void; // 어드민 인증 정보 설정
  clearAuth(): void; // 어드민 인증 정보 제거
  showHtmlLoading(): void; // HTML 로딩 표시
  hideHtmlLoading(): void; // HTML 로딩 숨김
  removeHtmlLoading(): void; // HTML 로딩 제거
}

/* eslint-disable */
export const AppContextDefaultValue: AppContextValue = {
  setAuth() {},
  clearAuth() {},
  showHtmlLoading() {},
  hideHtmlLoading() {},
  removeHtmlLoading() {},
};
/* eslint-enable */
