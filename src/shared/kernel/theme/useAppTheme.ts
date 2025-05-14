import { useContext } from 'react';
import type { AppThemeType } from './appThemeConst';
import { AppThemeContext } from './AppThemeContext';
import { AppTheme } from './appThemeConst';

interface useAppThemeReturn {
    toggleTheme: () => void;
    theme: AppThemeType;
}

export function useAppTheme(): useAppThemeReturn {
    const { theme, setTheme, disign } = useContext(AppThemeContext);

    const toggleTheme = () => {
        const newTheme: AppThemeType = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
        setTheme?.(newTheme);
        document.body.className = `${disign} ${newTheme}`;
    };
    return { theme, toggleTheme };
}
