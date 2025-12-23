import React from 'react';
import { PrivacyAccessReasonDialogProps as Props } from './PrivacyAccessReasonDialog.types';
import InputDialog from '../InputDialog';

export const PrivacyAccessReasonDialog = (props: Props) => {
  return <InputDialog {...props} />;
};

export type TPrivacyAccessReasonDialog = typeof PrivacyAccessReasonDialog;

export default PrivacyAccessReasonDialog;
