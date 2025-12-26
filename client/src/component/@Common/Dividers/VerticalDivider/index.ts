import l from '@loadable/component';

const VerticalDivider = l(
  () => import('./VerticalDivider'),
  loadable.options
) as unknown as typeof import('./VerticalDivider').default;

export { VerticalDivider };

export default VerticalDivider;

export * from './VerticalDivider.types';
