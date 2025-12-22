import React from 'react';
import { PrivacyTextProps as Props } from './PrivacyText.types';
import { Box, Typography } from '@mui/material';
import { usePrivacyAccessReasonDialog } from '@dialog';
import { DialogCommands } from '@pdg/react-dialog';
import { PrivacyAccess } from '@const';

export const PrivacyText: React.FC<Props> = ({ textType, text: initText, textProps, type, parentId }) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const privacyAccessReasonDialog = usePrivacyAccessReasonDialog();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isPrivacyAccess, setIsPrivacyAccess] = useState(false);
  const [text, setText] = useState(initText);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    setText(initText);
    setIsPrivacyAccess(false);
  }, [initText]);

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

export type TPrivacyText = typeof PrivacyText;

export default PrivacyText;
