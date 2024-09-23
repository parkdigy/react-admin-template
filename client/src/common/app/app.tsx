import { NavigateFunction } from 'react-router-dom';
import { AuthDialogPropsParam } from '@dialog';
import { AuthDialogType, EnqueueSnackbarType, CloseSnackbarType, MenuRoles } from './app.types';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';
import menu from './menu';

let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;
let _menuRoles: MenuRoles = {};
let _authDialog: AuthDialogType | undefined;
let _enqueueSnackbar: EnqueueSnackbarType | undefined;
let _closeSnackbar: CloseSnackbarType | undefined;
let _showLoading: () => void | undefined;
let _hideLoading: () => void | undefined;

const app = {
  /********************************************************************************************************************
   * Navigate
   * ******************************************************************************************************************/

  /**
   * 페이지 이동 함수 설정
   * @param navigate 페이지 이동 함수
   */
  setNavigate(navigate: NavigateFunction) {
    _navigate = navigate;
  },

  /**
   * 페이지 이동
   * @param path 이동할 경로
   * @param scrollTopPos 이동 후 스크롤 위치
   */
  navigate(path: string, scrollTopPos = 0) {
    if (_navigate) {
      _navigateScrollTopPos = scrollTopPos;
      _navigate(path);
    } else {
      console.log('!Not set navigate.');
    }
  },

  /**
   * 페이지 이동 후 스크롤 위치 설정
   * @param topPos 이동 후 스크롤 위치
   */
  setNavigateScrollTopPos(topPos: number) {
    _navigateScrollTopPos = topPos;
  },

  /**
   * 페이지 이동 후 스크롤 위치 반환
   * @returns 이동 후 스크롤 위치
   */
  getNavigateScrollTopPos() {
    return _navigateScrollTopPos;
  },

  /********************************************************************************************************************
   * Menu
   * ******************************************************************************************************************/

  /** 메뉴 */
  Menu: menu,

  /**
   * 메뉴 권한 설정
   * @param menuRoles 메뉴 권한
   */
  setMenuRoles(menuRoles: MenuRoles) {
    _menuRoles = menuRoles;
  },

  /**
   * 메뉴 권한 있는지 여부 반환
   * @param menu 메뉴
   * @param role 확인할 권한
   * @returns 권한 있는지 여부
   */
  hasMenuRole(menu: string, role: 'read' | 'write' | 'export') {
    return _menuRoles[menu] ? _menuRoles[menu][role] : false;
  },

  /**
   * 메뉴 Read 권한 있는지 여부 반환
   * @param menu 메뉴
   */
  hasMenuReadRole(menu: string) {
    return this.hasMenuRole(menu, 'read');
  },

  /**
   * 메뉴 Write 권한 있는지 여부 반환
   * @param menu 메뉴
   */
  hasMenuWriteRole(menu: string) {
    return this.hasMenuRole(menu, 'write');
  },

  /**
   * 메뉴 Export 권한 있는지 여부 반환
   * @param menu 메뉴
   */
  hasMenuExportRole(menu: string) {
    return this.hasMenuRole(menu, 'export');
  },

  /********************************************************************************************************************
   * AuthDialog
   * ******************************************************************************************************************/

  /**
   * 인증 다이얼로그 설정
   * @param authDialog 인증 다이얼로그
   */
  setAuthDialog(authDialog: AuthDialogType) {
    _authDialog = authDialog;
  },

  /**
   * 인증 다이얼로그 표시
   * @param props 인증 다이얼로그 속성
   */
  showAuthDialog(props: AuthDialogPropsParam): void {
    if (_authDialog) {
      _authDialog(props);
    } else {
      throw new Error('app.authDialog not set.');
    }
  },

  /********************************************************************************************************************
   * Snackbar
   * ******************************************************************************************************************/

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
        onClick: () => this.closeSnackbar(key),
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

  /********************************************************************************************************************
   * Loading
   * ******************************************************************************************************************/

  /**
   * 로딩 표시 함수 설정
   * @param showLoadingFunc 로딩 표시 함수
   */
  setShowLoading(showLoadingFunc: () => void) {
    _showLoading = showLoadingFunc;
  },

  /**
   * 로딩 숨김 함수 설정
   * @param hideLoadingFunc 로딩 숨김 함수
   */
  setHideLoading(hideLoadingFunc: () => void) {
    _hideLoading = hideLoadingFunc;
  },

  /**
   * 로딩 표시
   */
  showLoading() {
    if (_showLoading) {
      _showLoading();
    }
  },

  /**
   * 로딩 숨김
   */
  hideLoading() {
    if (_hideLoading) {
      _hideLoading();
    }
  },
};

export default app;
