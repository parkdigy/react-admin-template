/********************************************************************************************************************
 * 클립보드에 복사하는 아이콘 버튼 컴포넌트
 * ******************************************************************************************************************/

import { type CopyToClipboardIconButtonProps as Props } from './CopyToClipboardIconButton.types';

const CopyToClipboardIconButton = ({ text, tooltip, icon, size, successMsg, ...props }: Props) => {
  const content = useMemo(
    () => (
      <IconButton size={size} {...props}>
        {icon || 'ContentPaste'}
      </IconButton>
    ),
    [icon, props, size]
  );

  return (
    <CopyToClipboard
      text={text}
      onCopy={() => g.snackbar.showSuccess(ifUndefined(successMsg, '클립보드에 복사되었습니다.'))}
    >
      {tooltip === undefined ? content : <Tooltip title={tooltip}>{content}</Tooltip>}
    </CopyToClipboard>
  );
};

export default CopyToClipboardIconButton;
