import { useDialog } from '@pdg/react-dialog';
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
    app.setAuthDialog(authDialog);
  }, [authDialog]);

  useLayoutEffect(() => {
    app.setEnqueueSnackbar(enqueueSnackbar);
    app.setCloseSnackbar(closeSnackbar);
  }, [enqueueSnackbar, closeSnackbar]);

  useLayoutEffect(() => {
    g.nav.setNavigate(navigate);
  }, [navigate]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    g.nav.setLocation(location);
  }, [location]);

  useEffect(() => {
    app.scrollToTop(g.nav.getScrollTopPos());
    g.nav.setScrollTopPos(0);
  }, [location.pathname, location.search, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default RootLayoutAppInitializer;
