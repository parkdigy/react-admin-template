import React from 'react';
import { PrivacyTextProps as Props } from './PrivacyText.types';
import { Box, Typography } from '@mui/material';
import { usePrivacyAccessReasonDialog } from '@dialog';
import { DialogCommands } from '@pdg/react-dialog';
import { PrivacyAccess } from '@const';

export const PrivacyText = ({ textType, text: initText, textProps, type, parentId }: Props) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const privacyAccessReasonDialog = usePrivacyAccessReasonDialog();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isPrivacyAccess, setIsPrivacyAccess] = useState(false);

  /********************************************************************************************************************
   * State - text
   * ******************************************************************************************************************/

  const [text, setText] = useState(initText);
  if (useChanged(initText)) {
    setText(initText);
    setIsPrivacyAccess(false);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handlePrivacyAccessClick = useCallback(() => {
    privacyAccessReasonDialog({
      onConfirm(dialog: DialogCommands, reason: string) {
        PrivacyAccess.info({ type, parent_id: parentId, reason }).then(({ data }) => {
          setText(data.value);
          setIsPrivacyAccess(true);
          dialog.close();
        });
      },
    });
  }, [parentId, privacyAccessReasonDialog, setText, type]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box display='inline-flex' flexDirection='row' alignItems='center'>
      <Typography {...textProps}>
        {textType === 'tel'
          ? util.format.telNo(text)
          : textType === 'business_no'
            ? util.format.businessNo(text)
            : textType === 'personal_no'
              ? util.format.personalNo(text)
              : text}
      </Typography>
      {!isPrivacyAccess && (
        <div style={{ marginLeft: 5, marginTop: -10, marginBottom: -10 }}>
          <IconButton onClick={handlePrivacyAccessClick}>Visibility</IconButton>
        </div>
      )}
    </Box>
  );
};

export default PrivacyText;
