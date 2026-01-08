import { type OptionsObject, type SnackbarKey, type SnackbarMessage } from 'notistack';

export type SnackbarEnqueueType = (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;

export type SnackbarCloseType = (key?: SnackbarKey) => void;
