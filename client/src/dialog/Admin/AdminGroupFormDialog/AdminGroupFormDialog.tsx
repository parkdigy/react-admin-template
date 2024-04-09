/********************************************************************************************************************
 * 어드민 그룹 등록/수정 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { AdminGroupFormDialogProps } from './AdminGroupFormDialog.types';
import { AdminGroupForm } from '@comp';

const AdminGroupFormDialog: React.FC<AdminGroupFormDialogProps> = ({ id, onSuccess, onShow, onClose }) => {
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

  /** 저장 성공 - AdminGroupForm.onSuccess */
  const handleSuccess = useCallback(() => {
    if (onSuccess) onSuccess();
    close();
  }, [onSuccess, close]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      fullWidth
      maxWidth='md'
      ref={dialogRef}
      autoClose
      escapeClose={!changed}
      backdropClose={!changed}
      title={empty(id) ? '새 그룹' : '그룹 수정'}
      content={
        <ErrorBoundary>
          <AdminGroupForm id={id} onChange={() => setChanged(true)} onSuccess={handleSuccess} onCancel={close} />
        </ErrorBoundary>
      }
      onShow={onShow}
      onClose={onClose}
    />
  );
};

export default AdminGroupFormDialog;
