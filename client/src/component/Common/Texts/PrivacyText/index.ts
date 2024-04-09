import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyText = l(() => import('./PrivacyText'), loadable.options);

export { PrivacyText };

export default PrivacyText;

export * from './PrivacyText.types';
