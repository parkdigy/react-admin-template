let _showLoading: (() => void) | undefined;
let _hideLoading: (() => void) | undefined;
let _isShowLoading: (() => void) | undefined;
let _getLastHideLoadingTime: (() => number) | undefined;

const loading = {
  /** set */
  set({
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
  },

  /** show */
  show() {
    if (_showLoading) {
      _showLoading();
    }
  },

  /** hide */
  hide() {
    if (_hideLoading) {
      _hideLoading();
    }
  },

  /** isShow */
  isShow() {
    return _isShowLoading ? _isShowLoading() : false;
  },

  /** getLastHideTime */
  getLastHideTime() {
    return _getLastHideLoadingTime ? _getLastHideLoadingTime() : 0;
  },
};

export default loading;
