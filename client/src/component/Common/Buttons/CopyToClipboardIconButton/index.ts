import l from '@loadable/component';
import { loadable } from '@common';

const CopyToClipboardIconButton = l(
  () => import(/* webpackChunkName: "common-copy-to-clipboard-icon-button" */ './CopyToClipboardIconButton'),
  loadable.options
) as unknown as typeof import('./CopyToClipboardIconButton').default;

export { CopyToClipboardIconButton };

export default CopyToClipboardIconButton;

export type TCopyToClipboardIconButton = typeof CopyToClipboardIconButton;

export * from './CopyToClipboardIconButton.types';
