import { DialogRequireProps } from '@pdg/react-dialog';

export interface AdminUserFormDialogProps extends DialogRequireProps {
  id?: number;
  onSuccess?: () => void;
}
