import l from '@loadable/component';
import { loadable } from '@common';

const SearchExportButton = l(
  () => import(/* webpackChunkName: "common-search-export-button" */ './SearchExportButton'),
  loadable.options
) as unknown as typeof import('./SearchExportButton').default;

export { SearchExportButton };

export default SearchExportButton;

export type TSearchExportButton = typeof SearchExportButton;
