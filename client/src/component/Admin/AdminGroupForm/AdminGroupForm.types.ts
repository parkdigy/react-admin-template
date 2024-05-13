export interface AdminGroupFormProps {
  id?: number;
  onValueChange?(): void;
  onResetValueChange?(): void;
  onSuccess?(): void;
  onCancel?(): void;
}
