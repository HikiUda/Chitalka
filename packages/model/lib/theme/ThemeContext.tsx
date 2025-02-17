import { createContext } from 'react';
import type { DisignTypes, ThemeTypes } from './types/theme';

interface ThemeContextProps {
    theme: ThemeTypes;
    disign: DisignTypes;
    setTheme: (theme: ThemeTypes) => void;
    setDisign: (disign: DisignTypes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
