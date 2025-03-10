/********************************************************************************************************************
 * 에러 처리 컴포넌트
 * - CheckLoadError 발생 시 업데이트 체크 실행
 * ******************************************************************************************************************/

import React from 'react';
import { ErrorBoundaryProps as Props } from './ErrorBoundary.types';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';
import { loadable } from '@common';
import ErrorRetry from '../ErrorRetry';

const ErrorCatcher = withErrorBoundary(({ children }: { children: ReactElement }) => {
  const [boundaryError] = useErrorBoundary((error) => {
    const errorName = (error as Error).name;
    if (errorName === 'ChunkLoadError') {
      loadable.checkUpdate();
    }
  });

  const skipError = useMemo(
    () =>
      !!boundaryError &&
      contains(
        [
          'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
          'Rendered more hooks than during the previous render.',
        ],
        (boundaryError as Error).message
      ),
    [boundaryError]
  );

  return boundaryError && !skipError ? <ErrorRetry onRetry={() => location.reload()} /> : children;
});

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  return <ErrorCatcher>{children}</ErrorCatcher>;
};

export default ErrorBoundary;
