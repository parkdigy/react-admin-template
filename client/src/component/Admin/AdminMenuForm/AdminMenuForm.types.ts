import { AdminMenuListDataItem } from '@const';

export interface AdminMenuFormProps {
  parentMenu?: AdminMenuListDataItem;
  id?: string;
  onValueChange?(name: string, value: any): void;
  onResetValueChange?(): void;
  onSuccess?(): void;
  onCancel?(): void;
}
