import { Location, NavigateFunction } from 'react-router';

/********************************************************************************************************************
 * Variable
 * ******************************************************************************************************************/

let _location: Location<any> | undefined;
let _navigate: NavigateFunction | undefined;
let _navigateScrollTopPos = 0;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

function setLocation(location: Location<any>) {
  _location = location;
}

function setNavigate(navigate: NavigateFunction) {
  _navigate = navigate;
}

function go(path: string, replace = false, scrollTopPos = 0) {
  if (_navigate) {
    _navigateScrollTopPos = scrollTopPos;
    const currentPath = `${_location?.pathname}${_location?.search}${_location?.hash}`;
    if (path === currentPath) {
      window.scrollTo({ left: 0, top: 0 });
    } else {
      _navigate(path, { replace });
    }
  } else {
    console.log('!Not set navigate.');
  }
}

function setScrollTopPos(topPos: number) {
  _navigateScrollTopPos = topPos;
}

function getScrollTopPos() {
  return _navigateScrollTopPos;
}

/********************************************************************************************************************
 * Global
 * ******************************************************************************************************************/

const nav = {
  setLocation,
  setNavigate,
  setScrollTopPos,
  getScrollTopPos,
  go,
};

export default nav;
