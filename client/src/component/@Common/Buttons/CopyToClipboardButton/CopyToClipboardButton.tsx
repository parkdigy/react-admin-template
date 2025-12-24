/********************************************************************************************************************
 * 클립보드에 복사하는 버튼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { CopyToClipboardButtonProps as Props } from './CopyToClipboardButton.types';

const CopyToClipboardButton = ({ text, successMsg, ...props }: Props) => {
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => g.snackbar.showSuccess(ifUndefined(successMsg, '클립보드에 복사되었습니다.'))}
    >
      <Button {...props} />
    </CopyToClipboard>
  );
};

export default CopyToClipboardButton;
