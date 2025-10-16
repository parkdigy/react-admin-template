/********************************************************************************************************************
 * Loading Context Provider
 * ******************************************************************************************************************/

import React from 'react';
import { LoadingContextProviderProps as Props } from './LoadingContextProvider.types';
import LoadingContext from '../LoadingContext';
import { useLocation } from 'react-router';
import app from '@app';
import './LoadingContextProvider.scss';

/** LoadingContext 를 제공하는 Context Provider */
const LoadingContextProvider: React.FC<Props> = ({ children }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const showCountRef = useRef(0);
  const notUseTimerRef = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isUse, setIsUse] = useState(false);
  const [isShow, setIsShow] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      showCountRef.current = 0;
      setIsUse(false);
      setIsShow(false);
    };
  }, [location.pathname]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 로딩 표시 횟수를 증가 */
  const increaseShowCount = useCallback(() => {
    if (notUseTimerRef.current) {
      clearTimeout(notUseTimerRef.current);
      notUseTimerRef.current = undefined;
    }

    showCountRef.current += 1;
    setIsUse(true);
    setIsShow(true);
  }, []);

  /** 로딩 표시 횟수를 감소 */
  const decreaseShowCount = useCallback(() => {
    if (showCountRef.current > 0) {
      showCountRef.current -= 1;
      if (showCountRef.current === 0) {
        setIsShow(false);

        if (notUseTimerRef.current) {
          clearTimeout(notUseTimerRef.current);
          notUseTimerRef.current = undefined;
        }

        notUseTimerRef.current = setTimeout(() => {
          notUseTimerRef.current = undefined;
          setIsUse(false);
        }, 300);
      }
    }
  }, []);

  /********************************************************************************************************************
   * Context Value
   * ******************************************************************************************************************/

  /** 로딩 표시 */
  const showLoading = useCallback(() => {
    increaseShowCount();
  }, [increaseShowCount]);

  /** 로딩 숨김 */
  const hideLoading = useCallback(() => {
    decreaseShowCount();
  }, [decreaseShowCount]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    app._setLoading(showLoading, hideLoading);
  }, [showLoading, hideLoading]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LoadingContext.Provider
      value={{
        showLoading,
        hideLoading,
      }}
    >
      {isUse && (
        <div
          className={classnames(
            'LoadingContextProvider-Loading',
            isShow ? 'LoadingContextProvider-show' : 'LoadingContextProvider-hide'
          )}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div className='LoadingContextProvider-LoadingContent'>
            <div className='LoadingContextProvider-LoadingText' />
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
