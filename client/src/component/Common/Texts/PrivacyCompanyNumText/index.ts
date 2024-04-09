import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyCompanyNumText = l(() => import('./PrivacyCompanyNumText'), loadable.options);

export { PrivacyCompanyNumText };

export default PrivacyCompanyNumText;

export * from './PrivacyCompanyNumText.types';
