/********************************************************************************************************************
 * 어드민 사용자 등록/수정 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { AdminUserFormDialogProps } from './AdminUserFormDialog.types';
import { AdminUserForm } from '@comp';

const AdminUserFormDialog: React.FC<AdminUserFormDialogProps> = ({ id, onSuccess, onShow, onClose }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [changed, setChanged] = useState(false);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 다이얼로그 닫기 */
  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 성공 - AdminUserForm.onSuccess */
  const handleSuccess = useCallback(() => {
    onSuccess?.();
    close();
  }, [onSuccess, close]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth='sm'
      autoClose
      escapeClose={!changed}
      backdropClose={!changed}
      titleIcon='person'
      title={empty(id) ? '새 사용자' : '사용자 수정'}
      content={
        <ErrorBoundary>
          <AdminUserForm id={id} onChange={() => setChanged(true)} onSuccess={handleSuccess} onCancel={close} />
        </ErrorBoundary>
      }
      onShow={onShow}
      onClose={onClose}
    />
  );
};

export default AdminUserFormDialog;
