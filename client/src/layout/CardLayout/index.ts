import l from '@loadable/component';
import { loadable } from '@common';

const CardLayout = l(() => import('./CardLayout'), loadable.options);

export { CardLayout };

export default CardLayout;
