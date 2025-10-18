import React from 'react';
import { RootLoadingProps as Props } from './RootLoading.types';
import { Loading, LoadingCommands } from '@ccomp';

export const RootLoading = ({}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const loadingRef = useRef<LoadingCommands>(null);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const isShowLoading = useCallback(() => {
    return loadingRef.current?.isShow() || false;
  }, []);

  const showLoading = useCallback(() => {
    loadingRef.current?.show();
  }, []);

  const hideLoading = useCallback(() => {
    loadingRef.current?.hide();
  }, []);

  const getLastHideLoadingTime = useCallback(() => {
    return loadingRef.current?.getLastHideTime() || 0;
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    __setLoading({ showLoading, hideLoading, isShowLoading, getLastHideLoadingTime });
  }, [showLoading, hideLoading, isShowLoading, getLastHideLoadingTime]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <Loading ref={loadingRef} />;
};

export default RootLoading;
