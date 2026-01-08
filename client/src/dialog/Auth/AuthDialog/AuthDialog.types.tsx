export interface AuthDialogProps extends DialogRequireProps, Pick<DialogProps, 'color'> {
  intro: ReactNode;
  onSuccess: () => void;
  onFail: () => void;
}

export type AuthDialogPropsParam = Omit<AuthDialogProps, keyof DialogRequireProps> & Partial<DialogRequireProps>;
