export interface LoadingContextValue {
  showLoading(): void; // 로딩 표시
  hideLoading(): void; // 로딩 숨김
}

/* eslint-disable */
export const LoadingContextDefaultValue: LoadingContextValue = {
  showLoading() {},
  hideLoading() {},
};
/* eslint-enable */
