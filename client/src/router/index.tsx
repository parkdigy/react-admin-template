import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import AccessLogger from './AccessLogger';
import {
  Dashboard,
  // Admin
  AdminUserList,
  AdminGroupList,
  AdminMenuList,
  AdminUserLoginLogList,
  AdminUserPasswordChangeForm,
  AdminUserAccessLogList,
  AdminPrivacyAccessLogList,
  // Test
  TestDataList,
} from '@comp';

const accessLoggerRouteList: { path: string; element: ReactElement }[] = [
  // Admin
  { path: '/admin/user', element: <AdminUserList /> },
  { path: '/admin/menu', element: <AdminMenuList /> },
  { path: '/admin/group', element: <AdminGroupList /> },
  { path: '/admin/login_log', element: <AdminUserLoginLogList /> },
  { path: '/admin/password', element: <AdminUserPasswordChangeForm /> },
  { path: '/admin/access_log', element: <AdminUserAccessLogList /> },
  { path: '/admin/privacy_access_log', element: <AdminPrivacyAccessLogList /> },
  // Test
  { path: '/test/list', element: <TestDataList /> },
];

const routeList = (
  <>
    <Route path='/' element={<Dashboard />} />
    {accessLoggerRouteList.map(({ path, element }) => (
      <Route key={path} path={path} element={<AccessLogger path={path} element={element} />} />
    ))}

    <Route path='*' element={<Navigate to='/' />} />
  </>
);

const routes = () => {
  return <Routes>{routeList}</Routes>;
};

export default routes;
