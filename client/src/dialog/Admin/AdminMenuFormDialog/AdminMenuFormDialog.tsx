/********************************************************************************************************************
 * 어드민 메뉴 등록/수정 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { AdminMenuFormDialogProps } from './AdminMenuFormDialog.types';
import { AdminMenuForm } from '@comp';

const AdminMenuFormDialog: React.FC<AdminMenuFormDialogProps> = ({ parentMenu, id, onSuccess, onShow, onClose }) => {
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

  /** Form 데이터 변경 - AdminMenuForm.onValueChange */
  const handleValueChange = useCallback(() => {
    setChanged(true);
  }, []);

  /** Form 데이터 초기화 - AdminMenuForm.onResetValueChange */
  const handleResetValueChange = useCallback(() => {
    setChanged(false);
  }, []);

  /** 저장 성공 - AdminMenuForm.onSuccess */
  const handleSuccess = useCallback(() => {
    onSuccess?.();
    close();
  }, [onSuccess, close]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      fullWidth
      maxWidth='sm'
      ref={dialogRef}
      autoClose
      escapeClose={!changed}
      backdropClose={!changed}
      title={empty(id) ? `새 ${parentMenu ? '하위' : '메인'} 메뉴` : '메뉴 수정'}
      content={
        <ErrorBoundary>
          <AdminMenuForm
            parentMenu={parentMenu}
            id={id}
            onValueChange={handleValueChange}
            onResetValueChange={handleResetValueChange}
            onSuccess={handleSuccess}
            onCancel={close}
          />
        </ErrorBoundary>
      }
      onShow={onShow}
      onClose={onClose}
    />
  );
};

export default AdminMenuFormDialog;
