declare const env: typeof import('../global/env/index.ts').env;
declare const ll: typeof import('../global/ll/index.ts').ll;
declare const g: typeof import('../global/g/index.ts').g;
declare const color: typeof import('../global/color/index.ts').color;
declare const util: typeof import('../global/util/index.ts').util;
declare const loadable: typeof import('../global/loadable/index.ts').loadable;

// delay
declare const nextTick: typeof import('../global/delay/index.ts').nextTick;

// app
declare const app: typeof import('../global/app/index.ts').app;
declare type AuthDialogType = import('../global/app/index.ts').authDialogType;
declare type EnqueueSnackbarType = import('../global/app/index.ts').enqueueSnackbarType;
declare type CloseSnackbarType = import('../global/app/index.ts').closeSnackbarType;
declare type MenuRoles = import('../global/app/index.ts').menuRoles;

// api
declare const api: typeof import('../global/api/index.ts').api;
declare const createApi: typeof import('../global/api/index.ts').createApi;
declare type ApiResult = import('../global/api/index.ts').apiResult;
declare type ApiPaging = import('../global/api/index.ts').apiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').apiPageLimitRequestData;
declare type ApiAuthObject = import('../global/api/index.ts').apiAuthObject;
declare type ApiAuth = import('../global/api/index.ts').apiAuth;

// mediaQuery
declare const mediaQuery: typeof import('../global/mediaQuery/index.ts').mediaQuery;
declare const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;

// hooks
declare const useFormBlockData: typeof import('../global/hooks/index.ts').useFormBlockData;
declare const useFormBlockValid: typeof import('../global/hooks/index.ts').useFormBlockValid;

// admin
declare const SUPER_ADMIN_GROUP_ID: number;
