export interface AdminGroupFormProps {
  id?: number;
  onChange?(): void;
  onSuccess?(): void;
  onCancel?(): void;
}

export interface AdminGroupFormUsersItem {
  label: string;
  value: number;
  disabled?: boolean;
  groupName: string;
}
