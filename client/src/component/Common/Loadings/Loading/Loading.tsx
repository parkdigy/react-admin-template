/********************************************************************************************************************
 * 로딩 표시 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { LoadingCommands, LoadingProps as Props } from './Loading.types';
import { useLocation } from 'react-router';
import './Loading.scss';

const Loading = ({ ref }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const showCountRef = useRef(0);
  const notUseTimerRef = useRef<NodeJS.Timeout>(undefined);
  const lastHideTimeRef = useRef(new Date().getTime());

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [use, setUse] = useState(false);
  const [show, setShow] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      showCountRef.current = 0;
      setUse(false);
      setShow(false);
    };
  }, [location.pathname]);

  useEffect(() => {
    showCountRef.current = 0;
    notUseTimerRef.current = undefined;

    return () => {
      if (notUseTimerRef.current) {
        clearTimeout(notUseTimerRef.current);
        notUseTimerRef.current = undefined;
      }
    };
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 표시 카운트 증가 */
  const increaseShowCount = useCallback(() => {
    if (notUseTimerRef.current) {
      clearTimeout(notUseTimerRef.current);
      notUseTimerRef.current = undefined;
    }

    showCountRef.current += 1;
    setUse(true);
    setShow(true);
  }, []);

  /** 표시 카운트 감소 */
  const decreaseShowCount = useCallback(() => {
    if (showCountRef.current > 0) {
      showCountRef.current -= 1;
      if (showCountRef.current === 0) {
        setShow(false);
        lastHideTimeRef.current = new Date().getTime();

        if (notUseTimerRef.current) {
          clearTimeout(notUseTimerRef.current);
          notUseTimerRef.current = undefined;
        }

        notUseTimerRef.current = setTimeout(() => {
          notUseTimerRef.current = undefined;
          setUse(false);
        }, 300);
      }
    }
  }, []);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  useForwardRef(
    ref,
    useMemo(
      (): LoadingCommands => ({
        isShow: () => showCountRef.current > 0,
        show: increaseShowCount,
        hide: decreaseShowCount,
        getLastHideTime: () => lastHideTimeRef.current,
      }),
      [decreaseShowCount, increaseShowCount]
    )
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return use ? (
    <div
      className={classnames('Loading', show ? 'show' : 'hide')}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className='LoadingContent'>
        <div className='LoadingText' />
      </div>
    </div>
  ) : null;
};

export default Loading;
