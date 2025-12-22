import l from '@loadable/component';
import { loadable } from '@common';

const CopyToClipboardButton = l(
  () => import(/* webpackChunkName: "common-copy-to-clipboard-button" */ './CopyToClipboardButton'),
  loadable.options
) as unknown as typeof import('./CopyToClipboardButton').default;

export { CopyToClipboardButton };

export default CopyToClipboardButton;

export type TCopyToClipboardButton = typeof CopyToClipboardButton;

export * from './CopyToClipboardButton.types';
