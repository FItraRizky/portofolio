'use client';

import { createContext, useContext } from 'react';

type DarkModeContextType = {
  dark: boolean;
  toggle: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  dark: false,
  toggle: () => {}
});

export function useDarkMode() {
  return useContext(DarkModeContext);
}