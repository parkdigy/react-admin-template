import l from '@loadable/component';
import { loadable } from '@common';

const TestDataInfo = l(() => import('./TestDataInfo'), loadable.options);

export { TestDataInfo };

export * from './TestDataInfo.types';
