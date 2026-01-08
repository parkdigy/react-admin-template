import { ApiError, type ApiOption } from '@pdg/api';

const defaultOption: ApiOption = {
  baseUrl: '/api',
  timeParamName: '__t__',
  async onRequest(config, _baseUrl, _path, _requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 표시
      gLoading.show();
    }
    return config;
  },
  async onResponse(res, _config, _baseUrl, _path, _requestData, requestOption) {
    if (!requestOption?.silent) {
      // 로딩 숨김
      gLoading.hide();
    }
    const responseData = res.data;
    if (!requestOption?.raw) {
      if (!responseData || !responseData?.result)
        throw new ApiError('예샹치 못한 오류가 발생했습니다.', 'API_ERR_NO_RESULT');
      if (responseData.result.r) {
        gNav.go(responseData.result.r);
      }
      if (responseData.result.ro) {
        window.open(responseData.result.ro);
      }
      if (responseData.result.c !== 0) {
        throw new ApiError(responseData.result.m, `${responseData.result.c}`);
      } else {
        if (!requestOption?.silent && notEmpty(responseData.result.m)) {
          gAlert.showSuccess(responseData.result.m);
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
        window.location.href = '/auth/signin';
      } else if (!silent) {
        gAlert.showError(
          `(${data.result.c}) ${notEmpty(data.result.m) ? data.result.m : '예상치 못한 오류가 발생했습니다.'}`
        );
      }
    } else if (!silent) {
      gAlert.showError(`(${err.code}) ${err.message}`);
    }
  },
};

export default defaultOption;
