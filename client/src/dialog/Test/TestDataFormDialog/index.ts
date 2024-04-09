import l from '@loadable/component';
import { loadable } from '@common';

const TestDataFormDialog = l(() => import('./TestDataFormDialog'), loadable.options);

export { TestDataFormDialog };

export * from './TestDataFormDialog.types';
