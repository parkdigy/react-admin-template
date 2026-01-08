import { type RootLoadingProps as Props } from './RootLoading.types';

export const RootLoading = ({}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const loadingRef = useRef<LoadingCommands>(null);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const isShow = useCallback(() => {
    return loadingRef.current?.isShow() || false;
  }, []);

  const show = useCallback(() => {
    loadingRef.current?.show();
  }, []);

  const hide = useCallback(() => {
    loadingRef.current?.hide();
  }, []);

  const getLastHideTime = useCallback(() => {
    return loadingRef.current?.getLastHideTime() || 0;
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    g.loading.set({ show, hide, isShow, getLastHideTime });
  }, [show, hide, isShow, getLastHideTime]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <Loading ref={loadingRef} />;
};

export default RootLoading;
