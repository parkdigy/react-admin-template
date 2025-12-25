const path = require('path');

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
  gFormat: ['@pdg/formatting', 'default'],
  gKorean: ['@pdg/korean', 'default'],
  gBrowser: [path.resolve(__dirname, '../src/global/g/browser.ts'), 'default'],
  gColor: [path.resolve(__dirname, '../src/global/g/color.ts'), 'default'],
  gDate: [path.resolve(__dirname, '../src/global/g/date.ts'), 'default'],
  gLoading: [path.resolve(__dirname, '../src/global/g/loading.ts'), 'default'],
  gLocation: [path.resolve(__dirname, '../src/global/g/location.ts'), 'default'],
  gNav: [path.resolve(__dirname, '../src/global/g/nav.ts'), 'default'],
  gAuth: [path.resolve(__dirname, '../src/global/g/auth/auth.ts'), 'default'],
  AuthDialogType: [path.resolve(__dirname, '../src/global/g/auth/auth.types.ts'), 'AuthDialogType'],
  gMenu: [path.resolve(__dirname, '../src/global/g/menu/menu.ts'), 'Menu'],
  MenuRoles: [path.resolve(__dirname, '../src/global/g/menu/menu.types.ts'), 'MenuRoles'],
  gSnackbar: [path.resolve(__dirname, '../src/global/g/snackbar/snackbar.ts'), 'default'],
  SnackbarEnqueueType: [path.resolve(__dirname, '../src/global/g/snackbar/snackbar.types.ts'), 'SnackbarEnqueueType'],
  SnackbarCloseType: [path.resolve(__dirname, '../src/global/g/snackbar/snackbar.types.ts'), 'SnackbarCloseType'],
  gMui: [path.resolve(__dirname, '../src/global/g/mui.ts'), 'default'],

  // loadable
  loadable: [path.resolve(__dirname, '../src/global/loadable/index.ts'), 'default'],

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
