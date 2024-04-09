import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { ErrorBoundary } from '@ccomp';
import { TestDataInfoDialogProps } from './TestDataInfoDialog.types';
import { TestDataInfo } from '@comp';

const TestDataInfoDialog: React.FC<TestDataInfoDialogProps> = ({ id, subTitle, onShow, onClose, onChange }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);
  const changedRef = useRef(false);

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

  /** 정보 변경 이벤트 */
  const handleChange = useCallback(() => {
    changedRef.current = true;
  }, []);

  /** 다이얼로그 Show 이벤트 */
  const handleShow = useCallback(() => {
    changedRef.current = false;
    onShow();
  }, [onShow]);

  /** 다이얼로그 Close 이벤트 */
  const handleClose = useCallback(() => {
    if (onChange && changedRef.current) {
      onChange();
    }

    onClose();
  }, [onChange, onClose]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      fullWidth
      maxWidth='md'
      ref={dialogRef}
      autoClose
      escapeClose
      backdropClose
      title='데이터 정보'
      subTitle={subTitle}
      content={
        <ErrorBoundary>
          <TestDataInfo id={id} onChange={handleChange} onCancel={close} />
        </ErrorBoundary>
      }
      onShow={handleShow}
      onClose={handleClose}
    />
  );
};

export default TestDataInfoDialog;
