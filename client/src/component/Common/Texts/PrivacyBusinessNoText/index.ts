import l from '@loadable/component';

const PrivacyBusinessNoText = l(
  () => import(/* webpackChunkName: "privacy-business-no-text" */ './PrivacyBusinessNoText'),
  loadable.options
) as unknown as typeof import('./PrivacyBusinessNoText').default;

export { PrivacyBusinessNoText };

export default PrivacyBusinessNoText;

export * from './PrivacyBusinessNoText.types';
