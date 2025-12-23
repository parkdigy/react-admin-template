import l from '@loadable/component';

const SearchExportButton = l(
  () => import(/* webpackChunkName: "common-search-export-button" */ './SearchExportButton'),
  loadable.options
) as unknown as typeof import('./SearchExportButton').default;

export { SearchExportButton };

export default SearchExportButton;
