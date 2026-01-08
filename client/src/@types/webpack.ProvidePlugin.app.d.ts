declare global {
  // base
  const objectKeys: typeof import('../global/base/index.ts').objectKeys;
  const nextTick: typeof import('../global/base/index.ts').nextTick;

  // env
  const env: typeof import('../global/env/index.ts').default;

  // ll
  const ll: typeof import('../global/ll/index.ts').default;

  // g
  const g: typeof import('../global/g/index.ts').default;
  const gFormat: typeof import('@pdg/formatting').default;
  const gKorean: typeof import('@pdg/korean').default;
  const gBrowser: typeof import('../global/g/browser.ts').default;
  const gColor: typeof import('../global/g/color.ts').default;
  const gDate: typeof import('../global/g/date.ts').default;
  const gLoading: typeof import('../global/g/loading.ts').default;
  const gLocation: typeof import('../global/g/location.ts').default;
  const gNav: typeof import('../global/g/nav.ts').default;
  const gAuth: typeof import('../global/g/auth/auth.ts').default;
  type AuthDialogType = import('../global/g/index.ts').AuthDialogType;
  const gMenu: typeof import('../global/g/menu/menu.ts').default;
  type MenuRoles = import('../global/g/index.ts').MenuRoles;
  const gSnackbar: typeof import('../global/g/snackbar/snackbar.ts').default;
  type SnackbarEnqueueType = import('../global/g/index.ts').SnackbarEnqueueType;
  type SnackbarCloseType = import('../global/g/index.ts').SnackbarCloseType;
  const gMui: typeof import('../global/g/mui.ts').default;

  // loadable
  const loadable: typeof import('../global/loadable/index.ts').default;

  // api
  const api: typeof import('../global/api/index.ts').default;
  type ApiResult = import('../global/api/index.ts').ApiResult;
  type ApiPaging = import('../global/api/index.ts').ApiPaging;
  type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;
  type ApiAuthObject = import('../global/api/index.ts').ApiAuthObject;
  type ApiAuth = import('../global/api/index.ts').ApiAuth;
  const createApi: typeof import('../global/api/index.ts').createApi;

  // Const
  const Const: typeof import('../constant/index').default;

  // mediaQuery
  const mediaQuery: typeof import('../global/mediaQuery/index.ts').default;
  const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;

  // Context
  const useAppState: typeof import('../context/index.ts').useAppState;

  // hooks
  const useFormBlockData: typeof import('../global/hooks/index.ts').useFormBlockData;
  const useFormBlockValid: typeof import('../global/hooks/index.ts').useFormBlockValid;

  // admin
  const SUPER_ADMIN_GROUP_ID: number;
}

export {};
