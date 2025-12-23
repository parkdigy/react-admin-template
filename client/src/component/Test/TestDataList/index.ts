import l from '@loadable/component';

const TestDataList = l(
  () => import(/* webpackChunkName: "test-data-list" */ './TestDataList'),
  loadable.options
) as unknown as typeof import('./TestDataList').default;

export { TestDataList };

export default TestDataList;

export * from './TestDataList.types';
