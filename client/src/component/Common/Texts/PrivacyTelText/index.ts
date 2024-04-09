import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyTelText = l(() => import('./PrivacyTelText'), loadable.options);

export { PrivacyTelText };

export default PrivacyTelText;

export * from './PrivacyTelText.types';
