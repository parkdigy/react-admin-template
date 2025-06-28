import {
  ReactNode as _ReactNode,
  ReactElement as _ReactElement,
  useId as _useId,
  useRef as _useRef,
  useState as _useState,
  useEffect as _useEffect,
  useLayoutEffect as _useLayoutEffect,
  useCallback as _useCallback,
  useMemo as _useMemo,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

const _withStaticProps = <Props, T>(
  forwarded: ForwardRefExoticComponent<Props & RefAttributes<unknown>>,
  staticProps: T
) => Object.assign(forwarded, staticProps);

/* eslint-disable no-var */
declare global {
  type ReactNode = _ReactNode;
  type ReactElement = _ReactElement;

  var withStaticProps: typeof _withStaticProps;

  var useId: typeof _useId;
  var useRef: typeof _useRef;
  var useState: typeof _useState;
  var useLayoutEffect: typeof _useLayoutEffect;
  var useEffect: typeof _useEffect;
  var useCallback: typeof _useCallback;
  var useMemo: typeof _useMemo;
}
/* eslint-enable no-var */

globalThis.withStaticProps = _withStaticProps;

globalThis.useId = _useId;
globalThis.useRef = _useRef;
globalThis.useState = _useState;
globalThis.useLayoutEffect = _useLayoutEffect;
globalThis.useEffect = _useEffect;
globalThis.useCallback = _useCallback;
globalThis.useMemo = _useMemo;

export {};
