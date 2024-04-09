import l from '@loadable/component';
import { loadable } from '@common';

const SearchExportButton = l(() => import('./SearchExportButton'), loadable.options);

export { SearchExportButton };

export default SearchExportButton;
