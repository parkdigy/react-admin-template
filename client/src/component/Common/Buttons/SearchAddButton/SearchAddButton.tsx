/********************************************************************************************************************
 * Search 추가 버튼 컴포넌트
 * - Search 컴포넌트에서 사용
 * ******************************************************************************************************************/

import React from 'react';
import { SearchButton, SearchButtonProps } from '@pdg/react-form';

export const SearchAddButton: React.FC<Omit<SearchButtonProps, 'startIcon' | 'color' | 'variant'>> = (props) => {
  return <SearchButton icon='add' iconProps={{ style: { marginLeft: -5 } }} variant='contained' {...props} />;
};

export default SearchAddButton;
