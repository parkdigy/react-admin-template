import l from '@loadable/component';

const CopyToClipboardIconButton = l(
  () => import('./CopyToClipboardIconButton'),
  loadable.options
) as unknown as typeof import('./CopyToClipboardIconButton').default;

export { CopyToClipboardIconButton };

export default CopyToClipboardIconButton;

export * from './CopyToClipboardIconButton.types';
