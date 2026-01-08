import { ApiError, type ApiOption } from '@pdg/api';

const defaultOption: ApiOption = {
  baseUrl: '/api',
  timeParamName: '__t__',
  async onRequest(config, baseUrl, path, requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 표시
      gLoading.show();
    }
    return config;
  },
  async onResponse(res, config, baseUrl, path, requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 숨김
      gLoading.hide();
    }
    const responseData = res.data;
    if (!requestOption?.raw) {
      if (!responseData || !responseData?.result)
        throw new ApiError('예샹치 못한 오류가 발생했습니다.', 'API_ERR_NO_RESULT');
      if (responseData.result.r) {
        // redirect
        gNav.go(responseData.result.r);
      }
      if (responseData.result.ro) {
        // redirect 새창으로 열기
        window.open(responseData.result.ro);
      }
      if (responseData.result.c !== 0) {
        throw new ApiError(responseData.result.m, `${responseData.result.c}`);
      } else {
        if (!requestOption?.silent && notEmpty(responseData.result.m)) {
          // 성공 메시지 표시
          gSnackbar.showSuccess(responseData.result.m);
        }
      }
    }
    return responseData;
  },
  onError(err: ApiError<ApiResult>) {
    const { silent } = err.requestOption || {};
    if (!silent) {
      // 로딩 숨김
      gLoading.hide();
    }

    const data = err.response?.data;
    if (data && typeof data === 'object' && data.result) {
      if (data.result.c === 99997) {
        // 로그인 페이지로 이동
        window.location.href = '/auth/signin';
      } else if (!silent) {
        // 에러 메시지 표시
        gSnackbar.showError(
          `(${data.result.c}) ${notEmpty(data.result.m) ? data.result.m : '예상치 못한 오류가 발생했습니다.'}`
        );
      }
    } else if (!silent) {
      // 에러 메시지 표시
      gSnackbar.showError(`(${err.code}) ${err.message}`);
    }
  },
};

export default defaultOption;
