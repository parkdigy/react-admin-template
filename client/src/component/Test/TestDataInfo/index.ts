import l from '@loadable/component';

const TestDataInfo = l(
  () => import('./TestDataInfo'),
  loadable.options
) as unknown as typeof import('./TestDataInfo').default;

export { TestDataInfo };

export default TestDataInfo;

export * from './TestDataInfo.types';
