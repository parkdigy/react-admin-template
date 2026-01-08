/********************************************************************************************************************
 * Search 추가 버튼 컴포넌트
 * - Search 컴포넌트에서 사용
 * ******************************************************************************************************************/

import { type SearchAddButtonProps as Props } from './SearchAddButton.types';

export const SearchAddButton = (props: Props) => {
  return <SearchButton startIcon='add' startIconMarginLeft='-0.3em' variant='contained' {...props} />;
};

export default SearchAddButton;
