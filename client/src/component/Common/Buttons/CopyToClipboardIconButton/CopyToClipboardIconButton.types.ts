import { PIconButtonProps } from '@pdg/react-component';

export interface CopyToClipboardIconButtonProps extends Omit<PIconButtonProps, 'children'> {
  text: string;
  icon?: string;
  tooltip?: string;
  successMsg?: string;
}
