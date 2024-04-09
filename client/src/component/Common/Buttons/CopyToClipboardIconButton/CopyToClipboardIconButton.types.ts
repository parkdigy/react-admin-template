import { PdgIconButtonProps } from '@pdg/react-component';

export interface CopyToClipboardIconButtonProps extends Omit<PdgIconButtonProps, 'children'> {
  text: string;
  icon?: string;
  tooltip?: string;
  successMsg?: string;
}
