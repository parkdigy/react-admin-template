import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyAccessReasonDialog = l(() => import('./PrivacyAccessReasonDialog'), loadable.options);

export { PrivacyAccessReasonDialog };

export default PrivacyAccessReasonDialog;

export * from './PrivacyAccessReasonDialog.types';

export * from './usePrivacyAccessReasonDialog';
