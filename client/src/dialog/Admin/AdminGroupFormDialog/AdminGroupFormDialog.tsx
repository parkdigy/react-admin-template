/********************************************************************************************************************
 * 어드민 그룹 등록/수정 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { AdminGroupFormDialogProps as Props } from './AdminGroupFormDialog.types';
import { AdminGroupForm } from '@comp';

const AdminGroupFormDialog = ({ id, subTitle, onSuccess, onShow, onClose }: Props) => {
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

  /** 닫기 */
  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 사용자 데이터 변경 이벤트 */
  const handleValueChange = useCallback(() => {
    setChanged(true);
  }, []);

  /** 초기화 값 변경 이벤트 */
  const handleResetValueChange = useCallback(() => {
    setChanged(false);
  }, []);

  /** 저장 성공 이벤트 */
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
      maxWidth='md'
      ref={dialogRef}
      autoClose
      escapeClose={!changed}
      backdropClose={!changed}
      title={empty(id) ? '새 그룹' : '그룹 수정'}
      subTitle={subTitle}
      content={
        <ErrorBoundary>
          <AdminGroupForm
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

export default AdminGroupFormDialog;

// import React from 'react';
// import { Dialog, DialogCommands } from '@pdg/react-dialog';
// import { ErrorBoundary } from '@ccomp';
// import { AdminGroupFormDialogProps } from './AdminGroupFormDialog.types';
// import { AdminGroupForm } from '@comp';
//
// const AdminGroupFormDialog: React.FC<AdminGroupFormDialogProps> = ({ id, onSuccess, onShow, onClose }) => {
//   /********************************************************************************************************************
//    * Ref
//    * ******************************************************************************************************************/
//
//   const dialogRef = useRef<DialogCommands>(null);
//
//   /********************************************************************************************************************
//    * State
//    * ******************************************************************************************************************/
//
//   const [changed, setChanged] = useState(false);
//
//   /********************************************************************************************************************
//    * Function
//    * ******************************************************************************************************************/
//
//   /** 다이얼로그 닫기 */
//   const close = useCallback(() => {
//     dialogRef.current?.close();
//   }, []);
//
//   /********************************************************************************************************************
//    * Event Handler
//    * ******************************************************************************************************************/
//
//   /** 저장 성공 - AdminGroupForm.onSuccess */
//   const handleSuccess = useCallback(() => {
//     onSuccess?.();
//     close();
//   }, [onSuccess, close]);
//
//   /********************************************************************************************************************
//    * Render
//    * ******************************************************************************************************************/
//
//   return (
//     <Dialog
//       fullWidth
//       maxWidth='md'
//       ref={dialogRef}
//       autoClose
//       escapeClose={!changed}
//       backdropClose={!changed}
//       title={empty(id) ? '새 그룹' : '그룹 수정'}
//       content={
//         <ErrorBoundary>
//           <AdminGroupForm id={id} onChange={() => setChanged(true)} onSuccess={handleSuccess} onCancel={close} />
//         </ErrorBoundary>
//       }
//       onShow={onShow}
//       onClose={onClose}
//     />
//   );
// };
//
// export default AdminGroupFormDialog;
