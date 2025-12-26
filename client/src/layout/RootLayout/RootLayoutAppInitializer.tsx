import { AuthDialog } from '@dialog';
import { useSnackbar } from 'notistack';
import { useLocation, useNavigate } from 'react-router';

export const RootLayoutAppInitializer = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const authDialog = useDialog(AuthDialog);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();

  /********************************************************************************************************************
   * LayoutEffect
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    g.auth.setDialog(authDialog);
  }, [authDialog]);

  useLayoutEffect(() => {
    g.snackbar.setEnqueue(enqueueSnackbar);
    g.snackbar.setClose(closeSnackbar);
  }, [enqueueSnackbar, closeSnackbar]);

  useLayoutEffect(() => {
    g.nav.set(navigate);
  }, [navigate]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    g.location.set(location);
  }, [location]);

  useEffect(() => {
    g.browser.scrollToTop(g.nav.getScrollTopPos());
    g.nav.setScrollTopPos(0);
  }, [location.pathname, location.search, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default RootLayoutAppInitializer;
