import * as React from 'react';

declare global {
  // id
  const useId: typeof React.useId;

  // state
  const useState: typeof React.useState;
  const useReducer: typeof React.useReducer;

  // context
  const useContext: typeof React.useContext;

  // ref
  const useRef: typeof React.useRef;
  const useImperativeHandle: typeof React.useImperativeHandle;

  // effect
  const useEffect: typeof React.useEffect;
  const useEffectEvent: typeof React.useEffectEvent;
  const useLayoutEffect: typeof React.useLayoutEffect;
  const useInsertionEffect: typeof React.useInsertionEffect;

  // performance
  const useCallback: typeof React.useCallback;
  const useMemo: typeof React.useMemo;
  const useTransition: typeof React.useTransition;
  const useDeferredValue: typeof React.useDeferredValue;

  // form
  const useActionState: typeof React.useActionState;

  // debug
  const useDebugValue: typeof React.useDebugValue;

  // storage
  const useSyncExternalStore: typeof React.useSyncExternalStore;
}

export {};
