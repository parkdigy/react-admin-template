import l from '@loadable/component';

const SearchAddButton = l(
  () => import(/* webpackChunkName: "common-search-add-button" */ './SearchAddButton'),
  loadable.options
) as unknown as typeof import('./SearchAddButton').default;

export { SearchAddButton };

export default SearchAddButton;
