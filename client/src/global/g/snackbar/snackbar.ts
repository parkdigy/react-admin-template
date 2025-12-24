import { SnackbarCloseType, SnackbarEnqueueType } from './snackbar.types';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

let _enqueue: SnackbarEnqueueType | undefined;
let _close: SnackbarCloseType | undefined;

const snackbar = {
  /********************************************************************************************************************
   * 표시 함수 설정
   * ******************************************************************************************************************/
  setEnqueue(enqueueSnackbar: SnackbarEnqueueType): void {
    _enqueue = enqueueSnackbar;
  },

  /********************************************************************************************************************
   * 자동 숨김 시간 반환
   * ******************************************************************************************************************/
  getAutoHideDuration(message: string) {
    const duration = message.replace(/\W/g, '').length * 100 + message.replace(/[^ㄱ-ㅎ가-힣]/g, '').length * 200;
    return Math.min(Math.max(duration, 1500), 5000);
  },

  /********************************************************************************************************************
   * 기본 표시
   * ******************************************************************************************************************/
  show(message: SnackbarMessage, options?: OptionsObject): void {
    if (_enqueue) {
      const key = _enqueue(message, {
        autoHideDuration: typeof message === 'string' ? this.getAutoHideDuration(message) : undefined,
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        SnackbarProps: {
          onClick: () => this.close(key),
        },
        ...options,
      });
    } else {
      throw new Error('app.enqueueSnackbar not set.');
    }
  },

  /********************************************************************************************************************
   * 성공 표시
   * ******************************************************************************************************************/
  showSuccess(message: SnackbarMessage, options?: OptionsObject): void {
    this.show(message, { ...options, variant: 'success' });
  },

  /********************************************************************************************************************
   * 정보 표시
   * ******************************************************************************************************************/
  showInfo(message: SnackbarMessage, options?: OptionsObject): void {
    this.show(message, { ...options, variant: 'info' });
  },

  /********************************************************************************************************************
   * 오류 표시
   * ******************************************************************************************************************/
  showError(message: SnackbarMessage, options?: OptionsObject): void {
    this.show(message, { ...options, variant: 'error' });
  },

  /********************************************************************************************************************
   * 경고 표시
   * ******************************************************************************************************************/
  showWarning(message: SnackbarMessage, options?: OptionsObject): void {
    this.show(message, { ...options, variant: 'warning' });
  },

  /********************************************************************************************************************
   * 닫기 함수 설정
   * ******************************************************************************************************************/
  setClose(closeSnackbar: SnackbarCloseType): void {
    _close = closeSnackbar;
  },

  /********************************************************************************************************************
   * 닫기
   * ******************************************************************************************************************/
  close(key?: SnackbarKey): void {
    if (_close) {
      _close(key);
    } else {
      throw new Error('app.closeSnackbar not set.');
    }
  },
};

export default snackbar;
