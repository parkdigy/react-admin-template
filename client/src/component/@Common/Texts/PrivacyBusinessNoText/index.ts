import l from '@loadable/component';

const PrivacyBusinessNoText = l(
  () => import('./PrivacyBusinessNoText'),
  loadable.options
) as unknown as typeof import('./PrivacyBusinessNoText').default;

export { PrivacyBusinessNoText };

export default PrivacyBusinessNoText;

export * from './PrivacyBusinessNoText.types';
