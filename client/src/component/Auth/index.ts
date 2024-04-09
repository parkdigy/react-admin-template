import l from '@loadable/component';
import { loadable } from '@common';

const SignIn = l(() => import('./SignIn'), loadable.options);

export { SignIn };

export default SignIn;
