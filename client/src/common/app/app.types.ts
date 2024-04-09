import { AuthDialogPropsParam } from '@dialog';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

export type AuthDialogType = (props: AuthDialogPropsParam) => void;
export type EnqueueSnackbarType = (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
export type CloseSnackbarType = (key?: SnackbarKey) => void;
export type MenuRoles = Dict<{ read: boolean; write: boolean; export: boolean }>;
