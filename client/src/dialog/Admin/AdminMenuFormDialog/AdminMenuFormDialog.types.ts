import { DialogRequireProps } from '@pdg/react-dialog';
import { AdminMenuListDataItem } from '@const';

export interface AdminMenuFormDialogProps extends DialogRequireProps {
  parentMenu?: AdminMenuListDataItem;
  id?: string;
  onSuccess?: () => void;
}
