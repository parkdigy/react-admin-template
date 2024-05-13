import { DialogRequireProps } from '@pdg/react-dialog';

export interface AdminGroupFormDialogProps extends DialogRequireProps {
  id?: number;
  subTitle?: ReactNode;
  onSuccess?(): void;
}
