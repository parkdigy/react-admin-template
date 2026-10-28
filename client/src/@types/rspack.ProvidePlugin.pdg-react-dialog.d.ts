import * as PdgReactDialog from '@pdg/react-dialog';

declare global {
  // AlertDialog
  type AlertDialogProps = PdgReactDialog.AlertDialogProps;
  type AlertDialogCommands = PdgReactDialog.AlertDialogCommands;

  // ConfirmDialog
  type ConfirmDialogProps = PdgReactDialog.ConfirmDialogProps;
  type ConfirmDialogCommands = PdgReactDialog.ConfirmDialogCommands;

  // Dialog
  const Dialog: typeof PdgReactDialog.Dialog;
  type DialogProps = PdgReactDialog.DialogProps;
  type DialogCommands = PdgReactDialog.DialogCommands;

  // DialogActionButton
  const DialogActionButton: typeof PdgReactDialog.DialogActionButton;
  type DialogActionButtonProps = PdgReactDialog.DialogActionButtonProps;

  // DialogContext
  type DialogRequireProps = PdgReactDialog.DialogRequireProps;

  // uses
  type DialogDefault = PdgReactDialog.DialogDefault;
  const setDialogDefault: typeof PdgReactDialog.setDialogDefault;
  const getDialogDefault: typeof PdgReactDialog.getDialogDefault;
  const useAlertDialog: typeof PdgReactDialog.useAlertDialog;
  const useConfirmDialog: typeof PdgReactDialog.useConfirmDialog;
  const useDialog: typeof PdgReactDialog.useDialog;
}

export {};
