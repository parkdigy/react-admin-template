import l from '@loadable/component';

const PrivacyTelText = l(
  () => import('./PrivacyTelText'),
  loadable.options
) as unknown as typeof import('./PrivacyTelText').default;

export { PrivacyTelText };

export default PrivacyTelText;

export * from './PrivacyTelText.types';
