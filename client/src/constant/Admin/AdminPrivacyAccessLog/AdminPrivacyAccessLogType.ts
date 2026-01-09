export const AdminPrivacyAccessLogType = makeConst([
  ['TEST_EXPORT_LIST', 'Test List 액셀 다운로드'],
  ['TEST_INFO', 'Test Info'],
  ['TEST_EMAIL', 'Test Email'],
  ['TEST_TEL', 'Test Tel'],
  ['TEST_MOBILE', 'Test Mobile'],
  ['TEST_BUSINESS_NO', 'Test Company Number'],
  ['TEST_PERSONAL_NO', 'Test Personal Number'],
]);

export type AdminPrivacyAccessLogType = typeof AdminPrivacyAccessLogType.Type;

export default AdminPrivacyAccessLogType;
