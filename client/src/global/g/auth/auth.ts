import { AuthDialogPropsParam } from '@dialog';
import { AuthDialogType } from './auth.types';

let _authDialog: AuthDialogType | undefined;

const auth = {
  /********************************************************************************************************************
   * 인증 다이얼로그 설정
   * ******************************************************************************************************************/
  setDialog(authDialog: AuthDialogType) {
    _authDialog = authDialog;
  },

  /********************************************************************************************************************
   * 인증 다이얼로그 표시
   * ******************************************************************************************************************/
  showDialog(props: AuthDialogPropsParam): void {
    if (_authDialog) {
      _authDialog(props);
    } else {
      throw new Error('app.authDialog not set.');
    }
  },
};

export default auth;
