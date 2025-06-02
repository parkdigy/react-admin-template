import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyBusinessNoText = l(() => import('./PrivacyBusinessNoText'), loadable.options);

export { PrivacyBusinessNoText };

export default PrivacyBusinessNoText;

export * from './PrivacyBusinessNoText.types';
