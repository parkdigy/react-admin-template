/********************************************************************************************************************
 * 클립보드에 복사하는 아이콘 버튼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { CopyToClipboardIconButtonProps as Props } from './CopyToClipboardIconButton.types';
import app from '@app';
import { Tooltip } from '@mui/material';
import { PCopyToClipboard, PIconButton } from '@pdg/react-component';

const CopyToClipboardIconButton: React.FC<Props> = ({ text, tooltip, icon, size, successMsg, ...props }) => {
  const content = useMemo(
    () => (
      <PIconButton size={size} {...props}>
        {icon || 'ContentPaste'}
      </PIconButton>
    ),
    [icon, props, size]
  );

  return (
    <PCopyToClipboard
      text={text}
      onCopy={() => app.showSuccessSnackbar(ifUndefined(successMsg, '클립보드에 복사되었습니다.'))}
    >
      {tooltip === undefined ? content : <Tooltip title={tooltip}>{content}</Tooltip>}
    </PCopyToClipboard>
  );
};

export default CopyToClipboardIconButton;
