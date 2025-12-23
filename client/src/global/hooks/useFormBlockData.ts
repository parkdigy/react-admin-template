import { DependencyList } from 'react';

/**
 * 폼 블록 데이터 처리 훅
 * @pdg/react-form 컴포넌트의 FormBlock 분리 시 사용
 * @param callback 변경된 데이터 반환 함수
 * @param deps 변경 데이터 반환 함수 의존성 배열
 * @param onChange 데이터 변경 콜백
 * @param delay onChange 딜레이 호출 여부 (true: 1000ms, false: 1ms)
 */
const useFormBlockData = <T, RT extends Required<T>>(
  callback: () => { [K in keyof RT]: RT[K] | undefined },
  deps: DependencyList,
  onChange: (data: T) => void,
  delay?: boolean
) => {
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const proc = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }

    timerRef.current = setTimeout(
      () => {
        timerRef.current = undefined;
        onChange(callback() as T);
      },
      delay ? 1000 : 1
    );
  }, [callback, delay, onChange]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      proc();
    });
    useEffect(() => {
      return effectEvent();
    }, [deps, delay]);
  }
};

export default useFormBlockData;

export type UseFormBlockData = typeof useFormBlockData;

export { useFormBlockData };
