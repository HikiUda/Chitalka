import { createContext, useContext } from 'react';
import { AppTheme } from './appThemeConfig';

type AppThemeContextProps = {
    theme: AppTheme;
    setTheme: (theme: AppTheme) => void;
};

export const AppThemeContext = createContext<AppThemeContextProps | null>(null);

export function useAppThemeContext() {
    const context = useContext(AppThemeContext);
    if (!context) throw new Error('AppThemeProvider не проинициализирован.');
    return context;
}
