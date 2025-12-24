import React from 'react';

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
      gLoading.show();
    }, 100);

    return () => {
      if (isShow) {
        gLoading.hide();
      }
    };
  }, [setShowLoadingTimeout]);

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
      if (v !== env.version) {
        window.location.reload();
      }
    });
  },
};
