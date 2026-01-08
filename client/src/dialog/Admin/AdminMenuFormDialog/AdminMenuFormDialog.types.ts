import { type AdminMenuListDataItem } from '@const';

export interface AdminMenuFormDialogProps extends DialogRequireProps {
  parentMenu?: AdminMenuListDataItem;
  id?: string;
  onSuccess?: () => void;
}
