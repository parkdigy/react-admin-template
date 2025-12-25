import l from '@loadable/component';

const SearchExportButton = l(
  () => import('./SearchExportButton'),
  loadable.options
) as unknown as typeof import('./SearchExportButton').default;

export { SearchExportButton };

export default SearchExportButton;
