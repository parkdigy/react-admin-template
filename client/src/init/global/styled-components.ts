import _styled from 'styled-components';

/* eslint-disable no-var */
declare global {
  var styled: typeof _styled;
}
/* eslint-enable no-var */

globalThis.styled = _styled;
