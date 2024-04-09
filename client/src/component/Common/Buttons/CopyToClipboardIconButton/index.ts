import l from '@loadable/component';
import { loadable } from '@common';

const CopyToClipboardIconButton = l(() => import('./CopyToClipboardIconButton'), loadable.options);

export { CopyToClipboardIconButton };

export * from './CopyToClipboardIconButton.types';
