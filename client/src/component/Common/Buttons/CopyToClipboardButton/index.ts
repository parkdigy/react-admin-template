import l from '@loadable/component';

const CopyToClipboardButton = l(
  () => import(/* webpackChunkName: "copy-to-clipboard-button" */ './CopyToClipboardButton'),
  loadable.options
) as unknown as typeof import('./CopyToClipboardButton').default;

export { CopyToClipboardButton };

export default CopyToClipboardButton;

export * from './CopyToClipboardButton.types';
