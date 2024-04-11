import { DialogRequireProps } from '@pdg/react-dialog';

export interface TestDataInfoDialogProps extends DialogRequireProps {
  id: number;
  subTitle?: ReactNode;
  onChange?(): void;
}
