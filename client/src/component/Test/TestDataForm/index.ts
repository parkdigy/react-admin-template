import l from '@loadable/component';
import { loadable } from '@common';

const TestDataForm = l(() => import('./TestDataForm'), loadable.options);

export { TestDataForm };

export * from './TestDataForm.types';
