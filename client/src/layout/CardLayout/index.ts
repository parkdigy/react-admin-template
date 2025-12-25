import l from '@loadable/component';

const CardLayout = l(
  () => import('./CardLayout'),
  loadable.options
) as unknown as typeof import('./CardLayout').default;

export { CardLayout };

export default CardLayout;
