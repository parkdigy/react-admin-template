import l from '@loadable/component';

const PrivacyAccessReasonDialog = l(
  () => import(/* webpackChunkName: "privacy-access-reason-dialog" */ './PrivacyAccessReasonDialog'),
  loadable.options
) as unknown as typeof import('./PrivacyAccessReasonDialog').default;

export { PrivacyAccessReasonDialog };

export default PrivacyAccessReasonDialog;

export * from './PrivacyAccessReasonDialog.types';

export * from './usePrivacyAccessReasonDialog';
