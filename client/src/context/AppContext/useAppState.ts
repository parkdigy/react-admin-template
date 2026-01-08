import AppContext from './AppContext';
import { type AppContextValue } from './AppContext.types';

export function useAppState(): AppContextValue {
  const value = useContext(AppContext);
  if (value === undefined) {
    throw new Error('useAppState should be used within AppContext.Provider');
  }
  return value;
}

export default useAppState;
