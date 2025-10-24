import { useDialog } from '@pdg/react-dialog';
import { AuthDialog } from '@dialog';
import { useSnackbar } from 'notistack';
import { useLocation, useNavigate } from 'react-router';
import app from '@app';

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
    __setNavigate(navigate);
  }, [navigate]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    app.scrollToTop(__getNavigateScrollTopPos());
    __setNavigateScrollTopPos(0);
  }, [location.pathname, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default RootLayoutAppInitializer;
