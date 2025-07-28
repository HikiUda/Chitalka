import type { AppThemeColor, AppThemeMode } from './appThemeConfig';
import { AppTheme, AppThemeModeMatcher, AppThemeColorMatcher } from './appThemeConfig';
import { useAppThemeContext } from './appThemeContext';
import { appThemeLocalStorage } from './appThemeLocalStorage';

type useAppThemeReturn = {
    toggleThemeMode: (mode?: AppThemeMode) => void;
    toggleThemeColor: (color?: AppThemeColor) => void;
    setTheme: (theme: AppTheme) => void;
    themeMode: AppThemeMode;
    themeColor: AppThemeColor;
    theme: AppTheme;
};

export function useAppTheme(): useAppThemeReturn {
    const { theme, setTheme } = useAppThemeContext();

    const toggleThemeMode = (mode?: AppThemeMode) => {
        const nextMode: AppThemeMode = mode ?? AppThemeModeMatcher[theme.mode];
        setTheme({ ...theme, mode: nextMode });
        appThemeLocalStorage.set({ ...appThemeLocalStorage.get(), mode: nextMode });
    };

    const toggleThemeColor = (color?: AppThemeColor) => {
        const nextColor: AppThemeColor = color ?? AppThemeColorMatcher[theme.color];
        setTheme({ ...theme, color: nextColor });
    };

    return {
        toggleThemeMode,
        toggleThemeColor,
        setTheme,
        themeMode: theme.mode,
        themeColor: theme.color,
        theme,
    };
}
