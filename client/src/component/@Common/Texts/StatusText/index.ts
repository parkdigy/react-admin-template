import l from '@loadable/component';

const StatusText = l(
  () => import('./StatusText'),
  loadable.options
) as unknown as typeof import('./StatusText').default;

export { StatusText };

export default StatusText;

export * from './StatusText.types';
