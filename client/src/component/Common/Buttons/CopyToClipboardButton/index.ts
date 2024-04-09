import l from '@loadable/component';
import { loadable } from '@common';

const CopyToClipboardButton = l(() => import('./CopyToClipboardButton'), loadable.options);

export { CopyToClipboardButton };

export * from './CopyToClipboardButton.types';
