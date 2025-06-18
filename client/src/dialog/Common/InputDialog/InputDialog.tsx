/********************************************************************************************************************
 * 입력 폼 다이얼로그 컴포넌트
 * ******************************************************************************************************************/

import React, { KeyboardEvent } from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { InputDialogProps, InputDialogInputType } from './InputDialog.types';
import {
  PForm,
  PFormBody,
  PFormButton,
  PFormCol,
  PFormCommands,
  PFormEmail,
  PFormFooter,
  PFormMobile,
  PFormNumber,
  PFormRow,
  PFormTag,
  PFormTagValue,
  PFormTel,
  PFormText,
  PFormTextarea,
  PFormUrl,
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
  const formRef = useRef<PFormCommands>(null);

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
        onConfirm?.(dialogRef.current, value);
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
        <PForm ref={formRef} color={props?.color} onSubmit={handleSubmit}>
          <PFormBody>
            <PFormRow>
              <PFormCol>
                {inputType === 'text' && (
                  <PFormText
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'number' && (
                  <PFormNumber
                    name='input'
                    value={initValue as number | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'url' && (
                  <PFormUrl
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'tel' && (
                  <PFormTel
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'mobile' && (
                  <PFormMobile
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'textarea' && (
                  <PFormTextarea
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
                {inputType === 'tag' && (
                  <PFormTag
                    name='input'
                    value={initValue as PFormTagValue | undefined}
                    required={required}
                    {...inputProps}
                  />
                )}
                {inputType === 'email' && (
                  <PFormEmail
                    name='input'
                    value={initValue as string | undefined}
                    required={required}
                    onKeyDown={handleKeyDown}
                    {...inputProps}
                  />
                )}
              </PFormCol>
            </PFormRow>
          </PFormBody>
          <PFormFooter>
            <PFormRow>
              <PFormCol>
                <PFormButton onClick={close}>취소</PFormButton>
              </PFormCol>
              <PFormCol>
                <PFormButton type='submit'>확인</PFormButton>
              </PFormCol>
            </PFormRow>
          </PFormFooter>
        </PForm>
      </>
    ),
    [close, handleKeyDown, handleSubmit, initValue, inputProps, inputType, intro, props?.color, required]
  );

  return (
    <Dialog
      fullWidth
      autoClose
      escapeClose
      backdropClose
      content={content}
      maxWidth={maxWidth}
      {...props}
      ref={dialogRef}
      onShow={onShow}
      onClose={onClose}
    />
  );
}

export default InputDialog;
