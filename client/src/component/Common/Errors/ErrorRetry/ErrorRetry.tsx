/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorRetryProps as Props } from './ErrorRetry.types';
import Button from '../../Button';
import Icon from '../../Icon';
import styled from 'styled-components';

const ErrorRetry: React.FC<Props> = ({ fullScreen, onRetry }) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Container className={classnames(fullScreen && 'full-screen')}>
      <div>
        <Icon size={32}>error</Icon>
      </div>
      <div>
        <p>오류가 발생했습니다.</p>
        {onRetry && <p>잠시 후 재시도 해주세요.</p>}
      </div>
      {onRetry && (
        <Button color='light' onClick={onRetry}>
          재시도
        </Button>
      )}
    </Container>
  );
};

export default ErrorRetry;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #666;
  font-size: 14px;
  gap: 10px;

  &.full-screen {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
