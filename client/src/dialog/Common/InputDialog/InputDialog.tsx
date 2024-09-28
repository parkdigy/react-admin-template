/********************************************************************************************************************
 * 입력 폼 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React, { KeyboardEvent } from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { InputDialogProps, InputDialogInputType } from './InputDialog.types';
import {
  Form,
  FormBody,
  FormButton,
  FormCol,
  FormCommands,
  FormFooter,
  FormMobile,
  FormNumber,
  FormRow,
  FormTel,
  FormText,
  FormTextarea,
  FormUrl,
} from '@pdg/react-form';
import { Box } from '@mui/material';

function InputDialog<
  T extends InputDialogInputType,
  Required extends boolean | undefined,
  Value extends string | number,
>({
  inputType: initInputType,
  intro,
  initValue,
  required,
  inputProps,
  maxWidth: initMaxWidth,
  onConfirm,
  onShow,
  onClose,
  ...props
}: InputDialogProps<T, Required, Value>) {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);
  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const inputType = useMemo(() => ifUndefined(initInputType, 'text'), [initInputType]);
  const maxWidth = useMemo(() => ifUndefined(initMaxWidth, 'sm'), [initMaxWidth]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    nextTick(() => {
      formRef.current?.focus('input');
    });
  }, []);

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

  /** Form 제출 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: { input: any }) => {
      if (dialogRef.current) {
        let value = data.input;
        if (inputType === 'number') {
          if (empty(value)) {
            value = undefined;
          } else {
            value = Number(value);
          }
        } else {
          value = empty(value) ? '' : value;
        }
        onConfirm && onConfirm(dialogRef.current, value);
      }
    },
    [inputType, onConfirm]
  );

  /** KeyDown 이벤트 핸들러 */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (inputType !== 'textarea' && e.code === 'Enter') {
        formRef.current?.submit();
      }
    },
    [inputType]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const content = useMemo(
    () => (
      <>
        {intro && <Box sx={{ mb: 2 }}>{intro}</Box>}
        <Form ref={formRef} color={props?.color} onSubmit={handleSubmit}>
          <FormBody>
            <FormRow>
              <FormCol>
                {inputType === 'text' && (
                  <FormText
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'number' && (
                  <FormNumber
                    name='input'
                    value={initValue as number | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'url' && (
                  <FormUrl
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'tel' && (
                  <FormTel
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'mobile' && (
                  <FormMobile
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'textarea' && (
                  <FormTextarea
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
              </FormCol>
            </FormRow>
          </FormBody>
          <FormFooter>
            <FormRow>
              <FormCol>
                <FormButton onClick={close}>취소</FormButton>
              </FormCol>
              <FormCol>
                <FormButton type='submit'>확인</FormButton>
              </FormCol>
            </FormRow>
          </FormFooter>
        </Form>
      </>
    ),
    [close, handleKeyDown, handleSubmit, initValue, inputProps, inputType, intro, props?.color, required]
  );

  return (
    <Dialog
      fullWidth
      ref={dialogRef}
      autoClose
      escapeClose
      backdropClose
      content={content}
      maxWidth={maxWidth}
      {...props}
      onShow={onShow}
      onClose={onClose}
    />
  );
}

export default InputDialog;
