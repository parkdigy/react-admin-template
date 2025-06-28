import _classNames from 'classnames';

/* eslint-disable no-var */
declare global {
  var classnames: typeof _classNames;
}
/* eslint-enable no-var */

globalThis.classnames = _classNames;
