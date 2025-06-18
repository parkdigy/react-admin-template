import { PButtonProps } from '@pdg/react-component';

export interface CopyToClipboardButtonProps extends PButtonProps {
  text: string;
  successMsg?: string;
}
