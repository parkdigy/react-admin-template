import l from '@loadable/component';

const Divider = l(() => import('./Divider'), loadable.options) as unknown as typeof import('./Divider').default;

export { Divider };

export default Divider;

export * from './Divider.types';
