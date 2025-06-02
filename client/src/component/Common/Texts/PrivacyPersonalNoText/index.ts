import l from '@loadable/component';
import { loadable } from '@common';

const PrivacyPersonalNoText = l(() => import('./PrivacyPersonalNoText'), loadable.options);

export { PrivacyPersonalNoText };

export default PrivacyPersonalNoText;

export * from './PrivacyPersonalNoText.types';
