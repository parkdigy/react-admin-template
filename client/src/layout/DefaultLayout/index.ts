import l from '@loadable/component';

const DefaultLayout = l(
  () => import('./DefaultLayout'),
  loadable.options
) as unknown as typeof import('./DefaultLayout').default;

export { DefaultLayout };

export default DefaultLayout;
