/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorRetryProps as Props } from './ErrorRetry.types';
import { Alert, Box, Button, Icon, Typography } from '@mui/material';

const ErrorRetry: React.FC<Props> = ({ error, onRetry }) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [showError, setShowError] = useState(false);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Container>
      <Box sx={{ color: 'text.secondary', fontSize: 'small', textAlign: 'center' }}>
        <div>
          <Icon
            fontSize='large'
            color='error'
            style={{ cursor: 'pointer' }}
            onClick={error ? () => setShowError(true) : undefined}
          >
            error
          </Icon>
        </div>
        {error && showError && (
          <Alert severity='error' style={{ textAlign: 'left' }}>
            <div>
              <pre style={{ margin: 0, padding: 0 }}>{error.stack}</pre>
            </div>
          </Alert>
        )}
        <p style={{ marginTop: 10 }}>서버에 연결 중 오류가 발생했습니다.</p>
        <p>잠시 후 재시도 해주세요.</p>
        {onRetry && (
          <Button variant='outlined' size='small' sx={{ mt: 1 }} onClick={onRetry}>
            <Typography fontSize='inherit'>재시도</Typography>
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ErrorRetry;

/********************************************************************************************************************
 * Style
 * ******************************************************************************************************************/

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
