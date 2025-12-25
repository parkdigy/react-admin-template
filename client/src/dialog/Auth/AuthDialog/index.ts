import l from '@loadable/component';

const AuthDialog = l(
  () => import('./AuthDialog'),
  loadable.options
) as unknown as typeof import('./AuthDialog').default;

export { AuthDialog };

export default AuthDialog;

export * from './AuthDialog.types';
