import { type PrivacyTextProps as Props } from './PrivacyText.types';
import { Box, Typography } from '@mui/material';
import { usePrivacyAccessReasonDialog } from '@dialog';

export const PrivacyText = ({ textType, text: initText, textProps, type, parentId }: Props) => {
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
   * Changed
   * ******************************************************************************************************************/

  useFirstSkipChanged(() => {
    setText(initText);
    setIsPrivacyAccess(false);
  }, [initText]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handlePrivacyAccessClick = useCallback(() => {
    privacyAccessReasonDialog({
      onConfirm(dialog: DialogCommands, reason: string) {
        Const.PrivacyAccess.info({ type, parent_id: parentId, reason }).then(({ data }) => {
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
          ? g.format.telNo(text)
          : textType === 'business_no'
            ? g.format.businessNo(text)
            : textType === 'personal_no'
              ? g.format.personalNo(text)
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
