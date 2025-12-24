import { CloseSnackbarType, EnqueueSnackbarType } from '../app';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

const snackbar = {
  /**
   * Snackbar 표시 함수 설정
   * @param enqueueSnackbar Snackbar 표시 함수
   */
  setEnqueueSnackbar(enqueueSnackbar: EnqueueSnackbarType): void {
    _enqueueSnackbar = enqueueSnackbar;
  },

  /**
   * Snackbar 자동 숨김 시간 반환
   * @param message 메시지
   * @returns Snackbar 자동 숨김 시간
   */
  getSnackbarAutoHideDuration(message: string) {
    const duration = message.replace(/\W/g, '').length * 100 + message.replace(/[^ㄱ-ㅎ가-힣]/g, '').length * 200;
    return Math.min(Math.max(duration, 1500), 5000);
  },

  /**
   * Snackbar 표시
   * @param message 메시지
   * @param options 옵션
   */
  showSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    if (_enqueueSnackbar) {
      const key = _enqueueSnackbar(message, {
        autoHideDuration: typeof message === 'string' ? this.getSnackbarAutoHideDuration(message) : undefined,
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        SnackbarProps: {
          onClick: () => this.closeSnackbar(key),
        },
        ...options,
      });
    } else {
      throw new Error('app.enqueueSnackbar not set.');
    }
  },

  /**
   * 성공 Snackbar 표시
   * @param message 메시지
   * @param options 옵션
   */
  showSuccessSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    this.showSnackbar(message, { ...options, variant: 'success' });
  },

  /**
   * 정보 Snackbar 표시
   * @param message 메시지
   * @param options 옵션
   */
  showInfoSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    this.showSnackbar(message, { ...options, variant: 'info' });
  },

  /**
   * 에러 Snackbar 표시
   * @param message 메시지
   * @param options 옵션
   */
  showErrorSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    this.showSnackbar(message, { ...options, variant: 'error' });
  },

  /**
   * 경고 Snackbar 표시
   * @param message 메시지
   * @param options 옵션
   */
  showWarningSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    this.showSnackbar(message, { ...options, variant: 'warning' });
  },

  /**
   * Snackbar 닫기 함수 설정
   * @param closeSnackbar Snackbar 닫기 함수
   */
  setCloseSnackbar(closeSnackbar: CloseSnackbarType): void {
    _closeSnackbar = closeSnackbar;
  },

  /**
   * Snackbar 닫기
   * @param key Snackbar 키
   */
  closeSnackbar(key?: SnackbarKey): void {
    if (_closeSnackbar) {
      _closeSnackbar(key);
    } else {
      throw new Error('app.closeSnackbar not set.');
    }
  },
};
