export const AdminPrivacyAccessLogType = {
  TestExportList: 'TEST_EXPORT_LIST',
  TestEmail: 'TEST_EMAIL',
  TestTel: 'TEST_TEL',
  TestMobile: 'TEST_MOBILE',
  TestCompanyNum: 'TEST_COMPANY_NUM',
  TestPersonalNum: 'TEST_PERSONAL_NUM',
} as const;

export type AdminPrivacyAccessLogType = ValueOf<typeof AdminPrivacyAccessLogType>;

export default AdminPrivacyAccessLogType;
