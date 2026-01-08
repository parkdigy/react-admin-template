/********************************************************************************************************************
 * 에러 발생 시 재시도 컴포넌트
 * ******************************************************************************************************************/

import { type ErrorRetryProps as Props } from './ErrorRetry.types';

const ErrorRetry = ({ error, onRetry }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [showError, setShowError] = useState(false);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Container>
      <MuiBox sx={{ color: 'text.secondary', fontSize: 'small', textAlign: 'center' }}>
        <div>
          <MuiIcon
            fontSize='large'
            color='error'
            style={{ cursor: 'pointer' }}
            onClick={error ? () => setShowError(true) : undefined}
          >
            error
          </MuiIcon>
        </div>
        {error && showError && (
          <MuiAlert severity='error' style={{ textAlign: 'left' }}>
            <div>
              <pre style={{ margin: 0, padding: 0 }}>{error.stack}</pre>
            </div>
          </MuiAlert>
        )}
        <p style={{ marginTop: 10 }}>서버에 연결 중 오류가 발생했습니다.</p>
        <p>잠시 후 재시도 해주세요.</p>
        {onRetry && (
          <MuiButton variant='outlined' size='small' sx={{ mt: 1 }} onClick={onRetry}>
            <MuiTypography fontSize='inherit'>재시도</MuiTypography>
          </MuiButton>
        )}
      </MuiBox>
    </Container>
  );
};

export default ErrorRetry;

/********************************************************************************************************************
 * Style
 * ******************************************************************************************************************/

const Container = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
