import l from '@loadable/component';
import { loadable } from '@common';

const TestDataInfoDialog = l(() => import('./TestDataInfoDialog'), loadable.options);

export { TestDataInfoDialog };

export * from './TestDataInfoDialog.types';
