import { createContext } from 'react';
import type { AppThemeType, AppDisignType } from './appThemeConst';

interface AppThemeContextProps {
    theme: AppThemeType;
    disign: AppDisignType;
    setTheme: (theme: AppThemeType) => void;
    setDisign: (disign: AppDisignType) => void;
}

export const AppThemeContext = createContext<AppThemeContextProps>({} as AppThemeContextProps);
