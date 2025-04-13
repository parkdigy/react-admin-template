import { DependencyList } from 'react';
import { FormValidType } from '@types';

/**
 * 폼 블록 유효성 처리 훅
 * @pdg/react-form 컴포넌트의 FormBlock 분리 시 사용
 * @param callback 유효성 검사 함수
 * @param deps 유효성 검사 함수 의존성 배열
 * @param onValidChange 유효성 변경 콜백
 * @param delay 유효성 딜레이 호출 여부 (true: 500ms, false: 1ms)
 */
const useFormBlockValid = (
  callback: () => boolean,
  deps: DependencyList,
  onValidChange: (valid: FormValidType) => void,
  delay?: boolean
) => {
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  const [valid, setValid] = useState<FormValidType>(true);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    onValidChange(valid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valid]);

  const proc = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }

    timerRef.current = setTimeout(
      () => {
        timerRef.current = undefined;
        setValid(callback() ? true : 'error');
      },
      delay ? 500 : 1
    );
  }, [callback, delay]);

  useEffect(() => {
    proc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    proc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return valid;
};

export default useFormBlockValid;

export { useFormBlockValid };
