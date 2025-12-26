import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { TestDataFormDialogProps as Props } from './TestDataFormDialog.types';
import { TestDataForm } from '@comp';

const TestDataFormDialog = ({ id, subTitle, onSuccess, onShow, onClose }: Props) => {
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
      title={empty(id) ? '새 데이터' : '데이터 수정'}
      subTitle={subTitle}
      content={
        <ErrorBoundary>
          <TestDataForm
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

export default TestDataFormDialog;
