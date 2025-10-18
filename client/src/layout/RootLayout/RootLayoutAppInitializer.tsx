import { useDialog } from '@pdg/react-dialog';
import { AuthDialog } from '@dialog';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import app from '@app';

export const RootLayoutAppInitializer = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const authDialog = useDialog(AuthDialog);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

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
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default RootLayoutAppInitializer;
