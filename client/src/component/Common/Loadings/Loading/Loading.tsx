/********************************************************************************************************************
 * 로딩 표시 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { LoadingCommands, LoadingProps } from './Loading.types';
import './Loading.scss';

const Loading = React.forwardRef<LoadingCommands, LoadingProps>((props, ref) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const showCountRef = useRef(0);
  const notUseTimerRef = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [use, setUse] = useState(false);
  const [show, setShow] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

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

  useLayoutEffect(() => {
    if (ref) {
      const commands: LoadingCommands = {
        show: increaseShowCount,
        hide: decreaseShowCount,
      };

      if (typeof ref === 'function') {
        ref(commands);
      } else {
        ref.current = commands;
      }

      return () => {
        if (typeof ref === 'function') {
          ref(null);
        } else {
          ref.current = null;
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

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
});

export default Loading;
