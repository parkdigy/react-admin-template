import { useDialog } from '@pdg/react-dialog';
import { AuthDialog } from '@dialog';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import app from '@app';

export const RootLayoutAppInitializer = () => {
  const authDialog = useDialog(AuthDialog);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    app.setAuthDialog(authDialog);
  }, [authDialog]);

  useLayoutEffect(() => {
    app.setEnqueueSnackbar(enqueueSnackbar);
    app.setCloseSnackbar(closeSnackbar);
  }, [enqueueSnackbar, closeSnackbar]);

  useLayoutEffect(() => {
    app.setNavigate(navigate);
  }, [navigate]);

  return null;
};

export default RootLayoutAppInitializer;
