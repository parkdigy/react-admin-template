import l from '@loadable/component';

const TestDataFormDialog = l(
  () => import('./TestDataFormDialog'),
  loadable.options
) as unknown as typeof import('./TestDataFormDialog').default;

export { TestDataFormDialog };

export default TestDataFormDialog;

export * from './TestDataFormDialog.types';
