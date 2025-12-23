import l from '@loadable/component';

const TestDataForm = l(
  () => import(/* webpackChunkName: "test-data-form" */ './TestDataForm'),
  loadable.options
) as unknown as typeof import('./TestDataForm').default;

export { TestDataForm };

export default TestDataForm;

export * from './TestDataForm.types';
