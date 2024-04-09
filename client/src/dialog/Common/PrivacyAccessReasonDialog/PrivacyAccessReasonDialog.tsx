import React from 'react';
import { PrivacyAccessReasonDialogProps as Props } from './PrivacyAccessReasonDialog.types';
import InputDialog from '../InputDialog';

export const PrivacyAccessReasonDialog: React.FC<Props> = (props) => {
  return <InputDialog {...props} />;
};

export type TPrivacyAccessReasonDialog = typeof PrivacyAccessReasonDialog;

export default PrivacyAccessReasonDialog;
