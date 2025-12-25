import l from '@loadable/component';

const SearchAddButton = l(
  () => import('./SearchAddButton'),
  loadable.options
) as unknown as typeof import('./SearchAddButton').default;

export { SearchAddButton };

export default SearchAddButton;
