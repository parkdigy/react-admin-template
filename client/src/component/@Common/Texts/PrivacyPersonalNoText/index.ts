import l from '@loadable/component';

const PrivacyPersonalNoText = l(
  () => import('./PrivacyPersonalNoText'),
  loadable.options
) as unknown as typeof import('./PrivacyPersonalNoText').default;

export { PrivacyPersonalNoText };

export default PrivacyPersonalNoText;

export * from './PrivacyPersonalNoText.types';
