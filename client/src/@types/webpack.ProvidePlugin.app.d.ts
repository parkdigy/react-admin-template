// base
declare const objectKeys: typeof import('../global/base/index.ts').objectKeys;
declare const nextTick: typeof import('../global/base/index.ts').nextTick;

// env
declare const env: typeof import('../global/env/index.ts').env;

// ll
declare const ll: typeof import('../global/ll/index.ts').ll;

// g
declare const g: typeof import('../global/g/index.ts').g;

// loadable
declare const loadable: typeof import('../global/loadable/index.ts').loadable;

// app
declare const app: typeof import('../global/app/index.ts').app;
declare type AuthDialogType = import('../global/app/index.ts').AuthDialogType;
declare type EnqueueSnackbarType = import('../global/app/index.ts').EnqueueSnackbarType;
declare type CloseSnackbarType = import('../global/app/index.ts').CloseSnackbarType;
declare type MenuRoles = import('../global/app/index.ts').MenuRoles;

// api
declare const api: typeof import('../global/api/index.ts').api;
declare const createApi: typeof import('../global/api/index.ts').createApi;
declare type ApiResult = import('../global/api/index.ts').ApiResult;
declare type ApiPaging = import('../global/api/index.ts').ApiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;
declare type ApiAuthObject = import('../global/api/index.ts').ApiAuthObject;
declare type ApiAuth = import('../global/api/index.ts').ApiAuth;

// mediaQuery
declare const mediaQuery: typeof import('../global/mediaQuery/index.ts').mediaQuery;
declare const useScreenSize: typeof import('../global/mediaQuery/index.ts').useScreenSize;

// hooks
declare const useFormBlockData: typeof import('../global/hooks/index.ts').useFormBlockData;
declare const useFormBlockValid: typeof import('../global/hooks/index.ts').useFormBlockValid;

// admin
declare const SUPER_ADMIN_GROUP_ID: number;
