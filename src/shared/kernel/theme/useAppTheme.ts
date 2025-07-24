import type { AppThemeColor, AppThemeMode } from './appThemeConfig';
import { AppTheme, AppThemeModeMatcher, AppThemeColorMatcher } from './appThemeConfig';
import { useAppThemeContext } from './appThemeContext';
import { resolveAppThemeMode } from './resolveAppThemeMode';
import { appThemeLocalStorage } from './appThemeLocalStorage';

type useAppThemeReturn = {
    toggleThemeMode: (mode?: AppThemeMode) => void;
    toggleThemeColor: (color?: AppThemeColor) => void;
    changeTheme: (theme: AppTheme) => void;
    themeMode: AppThemeMode;
    themeColor: AppThemeColor;
    theme: AppTheme;
};

export function useAppTheme(): useAppThemeReturn {
    const { theme, setTheme } = useAppThemeContext();

    const changeTheme = (newTheme: AppTheme) => {
        setTheme(newTheme);
        const resolvedMode = resolveAppThemeMode(newTheme.mode);
        document.body.className = `${resolvedMode}`;
        document.body.dataset.theme = `${newTheme.color}-${resolvedMode}`;
    };

    const toggleThemeMode = (mode?: AppThemeMode) => {
        const nextMode: AppThemeMode = mode ?? AppThemeModeMatcher[theme.mode];
        changeTheme({ ...theme, mode: nextMode });
        appThemeLocalStorage.set({ ...appThemeLocalStorage.get(), mode: nextMode });
    };

    const toggleThemeColor = (color?: AppThemeColor) => {
        const nextColor: AppThemeColor = color ?? AppThemeColorMatcher[theme.color];
        changeTheme({ ...theme, color: nextColor });
    };

    return {
        toggleThemeMode,
        toggleThemeColor,
        changeTheme,
        themeMode: theme.mode,
        themeColor: theme.color,
        theme,
    };
}
