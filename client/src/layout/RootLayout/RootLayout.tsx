/********************************************************************************************************************
 * 루트 레이아웃 컴포넌트
 * - app 초기화 및 로그인 확인
 * ******************************************************************************************************************/

import '../../init';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { ApiError } from '@pdg/api';
import { type AuthSignInResponseData } from '@const';
import { Dialog, DialogContextProvider } from '@pdg/react-dialog';
import { SnackbarProvider } from 'notistack';
import { type AppAuthInfo, AppContextProvider } from '@context';
import { ThemeBase } from '../../theme';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';
import RootLayoutAppInitializer from './RootLayoutAppInitializer';
import CardLayout from '../CardLayout';
import DefaultLayout from '../DefaultLayout';
import { RootLoading } from './RootLoading';
import '../../sass/index.scss';

FormTextEditor.apiKey = '[your-api-key]';
FormTextEditor.onOpenWindow = () => {
  Dialog.setDisableEnforceFocus(true);
};
FormTextEditor.onOpenWindow = () => {
  Dialog.setDisableEnforceFocus(false);
};

const RootLayout = withErrorBoundary(() => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [boundaryError] = useErrorBoundary((error) => {
    const errorName = (error as Error).name;
    if (errorName === 'ChunkLoadError') {
      hideHtmlLoading();
      setErrorName(errorName);
      loadable.checkUpdate();
    }
  });

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const htmlLoadingHideCompleteTimer = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [initialized, setInitialized] = useState(false);
  const [auth, setAuth] = useState<AppAuthInfo>();
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState<string | undefined>();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const clearAuth = useCallback(() => {
    setAuth(undefined);
  }, []);

  const getHtmlLoading = useCallback((): HTMLElement | null => {
    return document.getElementById('___appLoading');
  }, []);

  const showHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('hide');
      el.classList.remove('hide-complete');
      el.classList.add('show');
    }
  }, [
    // 불변
    getHtmlLoading,
  ]);

  const hideHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('show');
      el.classList.add('hide');

      htmlLoadingHideCompleteTimer.current = setTimeout(() => {
        htmlLoadingHideCompleteTimer.current = undefined;

        el.classList.add('hide-complete');
      }, 300);
    }
  }, [
    // 불변
    getHtmlLoading,
  ]);

  const removeHtmlLoading = useCallback(() => {
    const el = getHtmlLoading();
    if (el) {
      if (htmlLoadingHideCompleteTimer.current) {
        clearTimeout(htmlLoadingHideCompleteTimer.current);
        htmlLoadingHideCompleteTimer.current = undefined;
      }

      el.classList.remove('show');
      el.classList.add('hide');
      setTimeout(() => {
        el.parentNode?.removeChild(el);
      }, 300);
    }
  }, [
    // 불변
    getHtmlLoading,
  ]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    if (error) {
      hideHtmlLoading();
    } else {
      showHtmlLoading();
    }
  }, [error]);

  useEventEffect(() => {
    if (!boundaryError) {
      hideHtmlLoading();
    } else {
      showHtmlLoading();
    }
  }, [boundaryError]);

  useEventEffect(() => {
    if (!error) {
      if (window.location.pathname.startsWith('/auth/')) {
        setInitialized(true);
      } else {
        // 로그인 확인
        createApi<AuthSignInResponseData>({
          onError(err: ApiError<ApiResult>) {
            g.loading.hide();

            if (err.response?.data?.result?.c === 99997) {
              clearAuth();
              window.location.href = '/auth/signin';
            } else {
              setTimeout(() => {
                setError(true);
              }, 500);
            }
          },
        })
          .get('auth.signin')
          .then(({ data }) => {
            setAuth(data);
            setInitialized(true);
            setError(false);
          });
      }
    }
  }, [error]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <BrowserRouter>
      <ThemeBase>
        <AppContextProvider value={{ auth, setAuth, clearAuth, showHtmlLoading, hideHtmlLoading, removeHtmlLoading }}>
          <DialogContextProvider>
            <SnackbarProvider>
              <RootLoading />
              <RootLayoutAppInitializer />

              {error ? (
                <MuiBox
                  style={{
                    position: 'fixed',
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MuiBox sx={{ color: 'text.secondary', fontSize: 'small', textAlign: 'center' }}>
                    <div>
                      <MuiIcon fontSize='large' color='error' style={{ cursor: 'pointer' }}>
                        error
                      </MuiIcon>
                    </div>
                    <p style={{ marginTop: 10 }}>서버에 연결 중 오류가 발생했습니다.</p>
                    <p>잠시 후 재시도 해주세요.</p>
                    <MuiButton variant='outlined' size='small' sx={{ mt: 1 }} onClick={() => setError(false)}>
                      <MuiTypography fontSize='inherit'>재시도</MuiTypography>
                    </MuiButton>
                  </MuiBox>
                </MuiBox>
              ) : boundaryError ? (
                <>
                  {errorName === 'ChunkLoadError' ? (
                    <Loading
                      ref={(commands: LoadingCommands) => {
                        if (commands) {
                          commands.show();
                        }
                      }}
                    />
                  ) : (
                    <ErrorRetry error={boundaryError as Error} onRetry={() => window.location.reload()} />
                  )}
                </>
              ) : initialized ? (
                <ErrorBoundary>
                  <Routes>
                    {!auth && <Route path='/auth/*' element={<CardLayout />} />}
                    {auth && <Route path='/*' element={<DefaultLayout />} />}
                    <Route path='*' element={<Navigate to='/' />} />
                  </Routes>
                </ErrorBoundary>
              ) : null}
            </SnackbarProvider>
          </DialogContextProvider>
        </AppContextProvider>
      </ThemeBase>
    </BrowserRouter>
  );
});

export default RootLayout;
