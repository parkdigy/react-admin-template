import l from '@loadable/component';
import { loadable } from '@common';

const TestDataList = l(() => import('./TestDataList'), loadable.options);

export { TestDataList };

export * from './TestDataList.types';
