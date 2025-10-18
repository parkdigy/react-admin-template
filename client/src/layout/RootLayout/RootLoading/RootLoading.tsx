import React from 'react';
import { RootLoadingProps as Props } from './RootLoading.types';
import { useLocation } from 'react-router';
import './RootLoading.scss';
import axios from 'axios';
import { ApiError, ApiRequestConfig } from '@pdg/api';

export const RootLoading = ({}: Props) => {
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

  const increaseShowCount = useCallback(() => {
    if (notUseTimerRef.current) {
      clearTimeout(notUseTimerRef.current);
      notUseTimerRef.current = undefined;
    }

    showCountRef.current += 1;
    setIsUse(true);
    setIsShow(true);
  }, []);

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
   * Effect
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    __setLoading(increaseShowCount, decreaseShowCount);
  }, [increaseShowCount, decreaseShowCount]);

  /********************************************************************************************************************
   * Axios
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const requestConfig = config as ApiRequestConfig;
        if (!requestConfig.silent) {
          increaseShowCount();
        }
        return config;
      },
      (error: ApiError) => {
        const config: ApiRequestConfig | undefined = error.config;
        if (config) {
          if (!config.silent) {
            decreaseShowCount();
          }
        }
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        const config: ApiRequestConfig = response.config;
        if (config) {
          if (!config.silent) {
            decreaseShowCount();
          }
        }
        return response;
      },
      (error: ApiError) => {
        const config: ApiRequestConfig | undefined = error.config;
        if (config) {
          if (!config.silent) {
            decreaseShowCount();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [increaseShowCount, decreaseShowCount]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return isUse ? (
    <div
      className={classnames('RootLoading', isShow ? 'RootLoading-show' : 'RootLoading-hide')}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className='RootLoading__Content'>
        <div className='RootLoading__Text' />
      </div>
    </div>
  ) : null;

  return null;
};

export default RootLoading;
