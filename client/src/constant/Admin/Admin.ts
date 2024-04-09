/********************************************************************************************************************
 * 어드민 API
 * ******************************************************************************************************************/

import AdminGroup from './AdminGroup';
import AdminUser from './AdminUser';
import AdminUserAccessLog from './AdminUserAccessLog';
import AdminMenu from './AdminMenu';
import AdminPrivacyAccessLog from './AdminPrivacyAccessLog';

export default {
  Group: AdminGroup,
  User: AdminUser,
  UserAccessLog: AdminUserAccessLog,
  Menu: AdminMenu,
  PrivacyAccessLog: AdminPrivacyAccessLog,
};
