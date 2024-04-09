import { DialogRequireProps } from '@pdg/react-dialog';

export interface AdminUserLoginLogListDialogProps extends DialogRequireProps {
  email?: string;
  onChange?(): void;
}
