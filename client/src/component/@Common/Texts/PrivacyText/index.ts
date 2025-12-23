import l from '@loadable/component';

const PrivacyText = l(
  () => import(/* webpackChunkName: "privacy-text" */ './PrivacyText'),
  loadable.options
) as unknown as typeof import('./PrivacyText').default;

export { PrivacyText };

export default PrivacyText;

export * from './PrivacyText.types';
