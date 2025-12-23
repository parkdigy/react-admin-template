/* eslint-disable */
const path = require('path');
/* eslint-enable */

module.exports = {
  // base
  objectKeys: [path.resolve(__dirname, '../src/global/base/index.ts'), 'objectKeys'],
  nextTick: [path.resolve(__dirname, '../src/global/base/index.ts'), 'nextTick'],

  // env
  env: [path.resolve(__dirname, '../src/global/env/index.ts'), 'default'],

  // ll
  ll: [path.resolve(__dirname, '../src/global/ll/index.ts'), 'default'],

  // g
  g: [path.resolve(__dirname, '../src/global/g/index.ts'), 'default'],

  // loadable
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],

  // app
  app: [path.resolve(__dirname, '../src/global/app/index.ts'), 'default'],
  AuthDialogType: [path.resolve(__dirname, '../src/global/app/index.ts'), 'AuthDialogType'],
  EnqueueSnackbarType: [path.resolve(__dirname, '../src/global/app/index.ts'), 'EnqueueSnackbarType'],
  CloseSnackbarType: [path.resolve(__dirname, '../src/global/app/index.ts'), 'CloseSnackbarType'],
  MenuRoles: [path.resolve(__dirname, '../src/global/app/index.ts'), 'MenuRoles'],

  // api
  api: [path.resolve(__dirname, '../src/global/api/index.ts'), 'default'],
  ApiResult: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiResult'],
  ApiPaging: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPaging'],
  ApiPageLimitRequestData: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiPageLimitRequestData'],
  ApiAuthObject: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiAuthObject'],
  ApiAuth: [path.resolve(__dirname, '../src/global/api/index.ts'), 'ApiAuth'],
  createApi: [path.resolve(__dirname, '../src/global/api/index.ts'), 'createApi'],

  // mediaQuery
  mediaQuery: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'default'],
  useScreenSize: [path.resolve(__dirname, '../src/global/mediaQuery/index.ts'), 'useScreenSize'],

  // hooks
  useFormBlockData: [path.resolve(__dirname, '../src/global/hooks/index.ts'), 'useFormBlockData'],
  useFormBlockValid: [path.resolve(__dirname, '../src/global/hooks/index.ts'), 'useFormBlockValid'],

  // admin
  SUPER_ADMIN_GROUP_ID: [path.resolve(__dirname, '../src/global/admin/index.ts'), 'SUPER_ADMIN_GROUP_ID'],
};
