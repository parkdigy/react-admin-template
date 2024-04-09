import l from '@loadable/component';
import { loadable } from '@common';

const SearchAddButton = l(() => import('./SearchAddButton'), loadable.options);

export { SearchAddButton };

export default SearchAddButton;
