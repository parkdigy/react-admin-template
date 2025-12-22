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
  show,
  hide,
  isShow,
  getLastHideTime,
}: {
  show: () => void;
  hide: () => void;
  isShow: () => void;
  getLastHideTime: () => number;
}) {
  _showLoading = show;
  _hideLoading = hide;
  _isShowLoading = isShow;
  _getLastHideLoadingTime = getLastHideTime;
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
 * Exports
 * ******************************************************************************************************************/

const loading = {
  set: setLoading,
  show: showLoading,
  hide: hideLoading,
  isShow: isShowLoading,
  getLastHideTime: getLastHideLoadingTime,
};

export default loading;
