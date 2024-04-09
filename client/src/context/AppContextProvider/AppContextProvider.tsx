/********************************************************************************************************************
 * App Context Provider
 * - 기본 Context Provider
 * ******************************************************************************************************************/

import React from 'react';
import { AppContextProviderProps as Props } from './AppContextProvider.types';
import AppContext from '../AppContext';

/** 앱 전역 상태를 관리하는 Context Provider */
const AppContextProvider: React.FC<Props> = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
