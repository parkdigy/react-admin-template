declare const env: import('../global/env/index.ts').Env;
declare const ll: import('../global/ll/index.ts').Ll;
declare const g: import('../global/g/index.ts').G;
declare const color: import('../global/color/index.ts').Color;
declare const util: import('../global/util/index.ts').Util;

// app
declare const app: import('../global/app/index.ts').App;
declare type AuthDialogType = import('../global/app/index.ts').AuthDialogType;
declare type EnqueueSnackbarType = import('../global/app/index.ts').EnqueueSnackbarType;
declare type CloseSnackbarType = import('../global/app/index.ts').CloseSnackbarType;
declare type MenuRoles = import('../global/app/index.ts').MenuRoles;

// api
declare const api: import('../global/api/index.ts').Api;
declare const createApi: import('../global/api/index.ts').CreateApi;
declare type ApiResult = import('../global/api/index.ts').ApiResult;
declare type ApiPaging = import('../global/api/index.ts').ApiPaging;
declare type ApiPageLimitRequestData = import('../global/api/index.ts').ApiPageLimitRequestData;

// mediaQuery
declare const mediaQuery: import('../global/mediaQuery/index.ts').MediaQuery;
declare const useScreenSize: import('../global/mediaQuery/index.ts').UseScreenSize;

// hooks
declare const useFormBlockData: import('../global/hooks/index.ts').UseFormBlockData;
declare const UseFormBlockValid: import('../global/hooks/index.ts').UseFormBlockValid;

// admin
declare const SUPER_ADMIN_GROUP_ID: number;
