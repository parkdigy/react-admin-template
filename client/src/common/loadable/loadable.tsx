import React from 'react';
import { api, ApiResult } from '../api';
import config from '../config';
import { useTimeoutRef } from '@pdg/react-hook';

interface VersionApp extends ApiResult {
  data: { v: string };
}

const LoadableLoading = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const [, setShowLoadingTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    let isShow = false;

    setShowLoadingTimeout(() => {
      isShow = true;
      __showLoading();
    }, 100);

    return () => {
      if (isShow) {
        __hideLoading();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default {
  /**
   * Loadable 기본 옵션
   */
  options: {
    fallback: <LoadableLoading />,
  },

  /**
   * 업데이트 체크
   */
  checkUpdate() {
    api.get<VersionApp>('version.app').then(({ data: { v } }) => {
      if (v !== config.version) {
        window.location.reload();
      }
    });
  },
};
