/********************************************************************************************************************
 * Variable
 * ******************************************************************************************************************/

let _showLoading: (() => void) | undefined;
let _hideLoading: (() => void) | undefined;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

function setLoading(showLoading: () => void, hideLoading: () => void) {
  _showLoading = showLoading;
  _hideLoading = hideLoading;
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

/********************************************************************************************************************
 * Global
 * ******************************************************************************************************************/

/* eslint-disable no-var */
declare global {
  var __setLoading: typeof setLoading;
  var __showLoading: typeof showLoading;
  var __hideLoading: typeof hideLoading;
}
/* eslint-enable no-var */

globalThis.__setLoading = setLoading;
globalThis.__showLoading = showLoading;
globalThis.__hideLoading = hideLoading;

export {};
