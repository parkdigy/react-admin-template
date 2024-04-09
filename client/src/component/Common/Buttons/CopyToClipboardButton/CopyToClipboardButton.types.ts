import { PdgButtonProps } from '@pdg/react-component';

export interface CopyToClipboardButtonProps extends PdgButtonProps {
  text: string;
  successMsg?: string;
}
