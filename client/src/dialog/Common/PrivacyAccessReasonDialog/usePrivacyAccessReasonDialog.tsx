import React from 'react';
import { PrivacyAccessReasonDialog } from './PrivacyAccessReasonDialog';
import { PrivacyAccessReasonDialogProps } from './PrivacyAccessReasonDialog.types';
import { Typography } from '@mui/material';

export function usePrivacyAccessReasonDialog(): (
  props: PartialOmit<PrivacyAccessReasonDialogProps, 'inputType' | 'required' | 'title' | 'titleIcon' | 'color'>
) => void {
  const dialog = useDialog(PrivacyAccessReasonDialog);

  return useCallback(
    (props) =>
      dialog({
        inputType: 'textarea',
        required: true,
        titleIcon: 'LockPerson',
        title: '개인정보 조회',
        intro: <Typography color='error'>개인정보 조회 사유를 입력해 주세요.</Typography>,
        color: 'error',
        ...props,
      } as any),
    [dialog]
  );
}

export default { usePrivacyAccessReasonDialog };
