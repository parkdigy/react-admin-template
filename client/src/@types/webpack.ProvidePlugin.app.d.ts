// base
declare const objectKeys: typeof import('../global/base/index.ts').objectKeys;
declare const nextTick: typeof import('../global/base/index.ts').nextTick;

// env
declare const env: typeof import('../global/env/index.ts').default;

// ll
declare const ll: typeof import('../global/ll/index.ts').default;

// g
declare const g: typeof import('../global/g/index.ts').default;
declare const gBrowser: typeof import('../global/g/browser.ts').default;
declare const gColor: typeof import('../global/g/color.ts').default;
declare const gDate: typeof import('../global/g/date.ts').default;
declare const gLoading: typeof import('../global/g/loading.ts').default;
declare const gLocation: typeof import('../global/g/location.ts').default;
declare const gNav: typeof import('../global/g/nav.ts').default;
declare const gAuth: typeof import('../global/g/auth/auth.ts').default;
declare type AuthDialogType = import('../global/g/index.ts').AuthDialogType;
declare const gMenu: typeof import('../global/g/menu/menu.ts').default;
declare type MenuRoles = import('../global/g/index.ts').MenuRoles;
declare const gSnackbar: typeof import('../global/g/snackbar/snackbar.ts').default;
declare type SnackbarEnqueueType = import('../global/g/index.ts').SnackbarEnqueueType;
declare type SnackbarCloseType = import('../global/g/index.ts').SnackbarCloseType;
declare const gMui: typeof import('../global/g/mui.ts').default;

// loadable
declare const loadable: typeof import('../global/loadable/index.ts').default;

// api
declare const api: typeof import('../global/api/index.ts').api;
declare const createApi: typeof import('../global/api/index.ts').createApi;
declare type ApiResult = import('../global/api/index.ts').ApiResult;
declare type ApiPaging = import('../global/api/index.ts').ApiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;
declare type ApiAuthObject = import('../global/api/index.ts').ApiAuthObject;
declare type ApiAuth = import('../global/api/index.ts').ApiAuth;

// mediaQuery
declare const mediaQuery: typeof import('../global/mediaQuery/index.ts').default;
declare const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;

// hooks
declare const useFormBlockData: typeof import('../global/hooks/index.ts').useFormBlockData;
declare const useFormBlockValid: typeof import('../global/hooks/index.ts').useFormBlockValid;

// admin
declare const SUPER_ADMIN_GROUP_ID: number;
