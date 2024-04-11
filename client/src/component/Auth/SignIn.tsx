/********************************************************************************************************************
 * 로그인 화면 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Form, FormRow, FormCol, FormEmail, FormPassword, FormButton, FormCommands, FormBody } from '@pdg/react-form';
import { CardHeader, CardContent, CardActions, Grid, Button, Alert, Card } from '@mui/material';
import { ApiError, ApiRequestData } from '@pdg/api';
import { Auth } from '@const';

const SignIn: React.FC = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorText, setErrorText] = useState<string | undefined>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 로그인 - Form.onSubmit */
  const handleSubmit = useCallback((data: ApiRequestData) => {
    Auth.signIn(data, false)
      .then(({ result }) => {
        location.href = result.r || '/';
      })
      .catch((err: ApiError) => {
        if (err.response?.data?.result?.m) {
          setErrorText(err.response.data.result.m);
        } else {
          setErrorText('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      });
  }, []);

  /** 비밀번호 입력 후 Enter 키 입력 시 Form.submit 호출 - FormPassword.onKeyDown */
  const handlePasswordKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        formRef.current?.submit();
      }
    },
    [formRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Card>
      <CardHeader title='Login' subheader='로그인' />
      <CardContent sx={{ width: 400 }}>
        {errorText && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {errorText}
          </Alert>
        )}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormBody>
            <FormRow>
              <FormCol>
                <FormEmail name='email' placeholder='이메일' required icon='email' />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <FormPassword
                  name='password'
                  placeholder='비밀번호'
                  icon='lock'
                  required
                  onKeyDown={handlePasswordKeyDown}
                />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <FormButton type='submit'>로그인</FormButton>
              </FormCol>
            </FormRow>
          </FormBody>
        </Form>
      </CardContent>
      <CardActions disableSpacing sx={{ pt: 0 }}>
        <Grid container>
          <Grid item>
            <Button variant='text'>회원가입</Button>
          </Grid>
          <Grid item sx={{ flex: 1, textAlign: 'right' }}>
            <Button variant='text'>아이디 찾기</Button>
            <Button variant='text'>비밀번호 찾기</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default SignIn;
