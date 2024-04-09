import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyPersonalNumText = l(() => import('./PrivacyPersonalNumText'), loadable.options);

export { PrivacyPersonalNumText };

export default PrivacyPersonalNumText;

export * from './PrivacyPersonalNumText.types';
