/********************************************************************************************************************
 * 계정 인증 다이얼로그 컴포넌트
 * - post, patch, delete API 호출 시 비밀번호를 다시 입력받아 인증하는 용도
 * ******************************************************************************************************************/

import React from 'react';
import { Dialog, DialogCommands } from '@pdg/react-dialog';
import { Grid } from '@mui/material';
import { AuthDialogProps } from './AuthDialog.types';
import api from '@api';
import { useAppState } from '@context';

const AuthDialog: React.FC<AuthDialogProps> = ({ intro, color, onShow, onClose, onSuccess, onFail }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { auth } = useAppState();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const ref = useRef<DialogCommands>(null);
  const successRef = useRef(false);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 계정 인증 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: Dict) => {
      api.notAuthPost('my.permission', data).then(() => {
        successRef.current = true;
        ref.current?.close();
      });
    },
    [ref]
  );

  /** 다이얼로그 닫기 - Dialog.onClose */
  const handleClose = useCallback(() => {
    if (successRef.current) {
      onSuccess?.();
    } else {
      onFail?.();
    }
    onClose?.();
  }, [onSuccess, onFail, onClose]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      ref={ref}
      autoClose
      maxWidth='xs'
      color={color}
      backdropClose
      escapeClose
      titleIcon='lock'
      title='계정 인증'
      content={
        <Grid container spacing={2} direction='column' sx={{ mt: 0.5, minWidth: 300 }}>
          <Grid style={{ textAlign: 'center' }}>{intro}</Grid>
          <Grid>
            <Form sx={{ mt: 2 }} color={color} onSubmit={handleSubmit}>
              <FormBody>
                <FormRow>
                  <FormCol>
                    <FormEmail name='email' label='이메일' disabled value={auth?.email} />
                  </FormCol>
                </FormRow>
                <FormRow>
                  <FormCol>
                    <FormPassword name='password' label='비밀번호' required />
                  </FormCol>
                </FormRow>
              </FormBody>
              <FormFooter>
                <FormRow>
                  <FormCol>
                    <FormButton type='submit' sx={{ height: 40 }}>
                      확인
                    </FormButton>
                  </FormCol>
                </FormRow>
              </FormFooter>
            </Form>
          </Grid>
        </Grid>
      }
      onShow={onShow}
      onClose={handleClose}
    />
  );
};

export default AuthDialog;
