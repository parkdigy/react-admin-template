/********************************************************************************************************************
 * 어드민 사용자 로그인 로그 목록 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { AdminUserLoginLogListDialogProps } from './AdminUserLoginLogListDialog.types';
import { AdminUserLoginLogList } from '@comp';

const AdminUserLoginLogListDialog: React.FC<AdminUserLoginLogListDialogProps> = ({
  email,
  onChange,
  onShow,
  onClose,
}) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);
  const changedRef = useRef<boolean>(false);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 데이터 변경 - AdminUserLoginLogList.onChange */
  const handleChange = useCallback(() => {
    changedRef.current = true;
  }, []);

  /** 다이얼로그 보이기 - Dialog.onShow */
  const handleShow = useCallback(() => {
    changedRef.current = false;
    onShow();
  }, [onShow]);

  /** 다이얼로그 닫기 - Dialog.onClose */
  const handleClose = useCallback(() => {
    if (onChange && changedRef.current) {
      onChange();
    }
    onClose();
  }, [onChange, onClose]);

  /** 스크롤 최상단으로 이동 요청 이벤트 */
  const handleRequestScrollToTop = useCallback(() => {
    dialogRef.current?.scrollToTop();
  }, [dialogRef]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth='lg'
      fullHeight
      autoClose
      escapeClose
      backdropClose
      titleIcon='person'
      title='로그인 로그'
      content={
        <ErrorBoundary>
          <AdminUserLoginLogList
            noHash
            email={email}
            limit={10}
            onChange={handleChange}
            onRequestScrollToTop={handleRequestScrollToTop}
          />
        </ErrorBoundary>
      }
      onShow={handleShow}
      onClose={handleClose}
    />
  );
};

export default AdminUserLoginLogListDialog;
