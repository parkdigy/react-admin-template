import AppContext from './AppContext';
import { AppContextValue } from './AppContext.types';
import { useContext } from 'react';

export default function useAppState(): AppContextValue {
  const value = useContext(AppContext);
  if (value === undefined) {
    throw new Error('useAppState should be used within AppContext.Provider');
  }
  return value;
}
