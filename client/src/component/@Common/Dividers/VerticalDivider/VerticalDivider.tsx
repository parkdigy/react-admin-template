/********************************************************************************************************************
 * 세로 분리 Line 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { VerticalDividerProps as Props } from './VerticalDivider.types';
import { styled } from '@mui/material';

const VerticalDivider = ({}: Props) => {
  return <Container />;
};

export default VerticalDivider;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const Container = styled('div')`
  display: inline-block;
  &:before {
    content: '|';
    padding: 0 5px;
    color: #cfcfcf;
  }
`;
