import l from '@loadable/component';
import { loadable } from '@common';

const InputDialog = l(() => import('./InputDialog'), loadable.options);

export { InputDialog };

export default InputDialog;

export * from './InputDialog.types';

export * from './useInputDialog';
