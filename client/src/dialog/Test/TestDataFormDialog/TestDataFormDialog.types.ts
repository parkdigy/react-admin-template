import { DialogRequireProps } from '@pdg/react-dialog';

export interface TestDataFormDialogProps extends DialogRequireProps {
  id?: number;
  subTitle?: ReactNode;
  onSuccess?: () => void;
}
