/********************************************************************************************************************
 * Variable
 * ******************************************************************************************************************/

let _showLoading: (() => void) | undefined;
let _hideLoading: (() => void) | undefined;
let _isShowLoading: (() => void) | undefined;
let _getLastHideLoadingTime: (() => number) | undefined;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

function setLoading({
  showLoading,
  hideLoading,
  isShowLoading,
  getLastHideLoadingTime,
}: {
  showLoading: () => void;
  hideLoading: () => void;
  isShowLoading: () => void;
  getLastHideLoadingTime: () => number;
}) {
  _showLoading = showLoading;
  _hideLoading = hideLoading;
  _isShowLoading = isShowLoading;
  _getLastHideLoadingTime = getLastHideLoadingTime;
}

function showLoading() {
  if (_showLoading) {
    _showLoading();
  }
}

function hideLoading() {
  if (_hideLoading) {
    _hideLoading();
  }
}

function isShowLoading() {
  return _isShowLoading ? _isShowLoading() : false;
}

function getLastHideLoadingTime() {
  return _getLastHideLoadingTime ? _getLastHideLoadingTime() : 0;
}

/********************************************************************************************************************
 * Global
 * ******************************************************************************************************************/

/* eslint-disable no-var */
declare global {
  var __setLoading: typeof setLoading;
  var __showLoading: typeof showLoading;
  var __hideLoading: typeof hideLoading;
  var __isShowLoading: typeof isShowLoading;
  var __getLastHideLoadingTime: typeof getLastHideLoadingTime;
}
/* eslint-enable no-var */

globalThis.__setLoading = setLoading;
globalThis.__showLoading = showLoading;
globalThis.__hideLoading = hideLoading;
globalThis.__isShowLoading = isShowLoading;
globalThis.__getLastHideLoadingTime = getLastHideLoadingTime;

export {};
