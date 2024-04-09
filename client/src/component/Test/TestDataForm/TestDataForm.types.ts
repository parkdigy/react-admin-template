export interface TestDataFormProps {
  id?: number;
  onValueChange?(name: string, value: any): void;
  onResetValueChange?(): void;
  onSuccess?(): void;
  onCancel?(): void;
}
