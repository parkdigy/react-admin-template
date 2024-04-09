import l from '@loadable/component';
import { loadable } from '@common';

const AuthDialog = l(() => import('./AuthDialog'), loadable.options);

export { AuthDialog };

export default AuthDialog;

export * from './AuthDialog.types';
