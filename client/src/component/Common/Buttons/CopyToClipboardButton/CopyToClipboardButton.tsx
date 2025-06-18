/********************************************************************************************************************
 * 클립보드에 복사하는 버튼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { CopyToClipboardButtonProps as Props } from './CopyToClipboardButton.types';
import app from '@app';
import { PButton, PCopyToClipboard } from '@pdg/react-component';

const CopyToClipboardButton: React.FC<Props> = ({ text, successMsg, ...props }) => {
  return (
    <PCopyToClipboard
      text={text}
      onCopy={() => app.showSuccessSnackbar(ifUndefined(successMsg, '클립보드에 복사되었습니다.'))}
    >
      <PButton {...props} />
    </PCopyToClipboard>
  );
};

export default CopyToClipboardButton;
