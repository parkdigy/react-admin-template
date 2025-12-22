/********************************************************************************************************************
 * 어드민 사용자 비밀번호 변경 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { My, MyPasswordChangeRequestData } from '@const';
import { Alert } from '@mui/material';

const AdminUserPasswordChangeForm = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 비밀번호 확인 유효성 검사 - FormPassword[new_password_confirm].onValidate */
  const handlePasswordConfirmValidate = useCallback((value: string) => {
    if (formRef.current) {
      if (formRef.current.getValue('new_password') !== value) {
        return '비밀번호가 일치하지 않습니다.';
      }
    } else {
      return '예상치 못한 오류가 발생했습니다.';
    }
    return true;
  }, []);

  /** 비밀번호 변경 - Form.onSubmit */
  const handleSubmit = useCallback((data: Dict) => {
    My.passwordChange('비밀번호를 변경하시겠습니까?', data as unknown as MyPasswordChangeRequestData).then(() => {
      formRef.current?.resetAll();
    });
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <Alert severity='info' sx={{ mb: 2 }}>
        변경 할 비밀번호를 입력해 주세요.
      </Alert>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormPassword
                name='new_password'
                label='새 비밀번호'
                required
                autoFocus
                helperText='10~20자리의 대소문자+숫자+특수문자 조합으로 입력해 주세요.'
                validPattern={
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#&+\-%@=/\\:;,.‘“^`~_|!?*$#<>()[\]{}])[0-9\D]{10,20}/
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <FormPassword
                name='new_password_confirm'
                label='새 비밀번호 확인'
                required
                onValidate={handlePasswordConfirmValidate}
              />
            </FormCol>
          </FormRow>
        </FormBody>
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton type='submit' startIcon='save_alt'>
                확인
              </FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      </Form>
    </div>
  );
};

export default AdminUserPasswordChangeForm;
