import l from '@loadable/component';

const TestDataInfoDialog = l(
  () => import(/* webpackChunkName: "test-data-info-dialog" */ './TestDataInfoDialog'),
  loadable.options
) as unknown as typeof import('./TestDataInfoDialog').default;

export { TestDataInfoDialog };

export default TestDataInfoDialog;

export * from './TestDataInfoDialog.types';
