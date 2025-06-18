/********************************************************************************************************************
 * Search 추가 버튼 컴포넌트
 * - Search 컴포넌트에서 사용
 * ******************************************************************************************************************/

import React from 'react';
import { PSearchButton, PSearchButtonProps } from '@pdg/react-form';

export const SearchAddButton: React.FC<Omit<PSearchButtonProps, 'startIcon' | 'color' | 'variant'>> = (props) => {
  return <PSearchButton startIcon='add' startIconMarginLeft='-0.3em' variant='contained' {...props} />;
};

export default SearchAddButton;
