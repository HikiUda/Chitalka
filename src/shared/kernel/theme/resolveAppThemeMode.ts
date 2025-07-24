import { AppThemeMode } from './appThemeConfig';

export const resolveAppThemeMode = (mode: AppThemeMode): Exclude<AppThemeMode, 'system'> => {
    if (mode === 'system')
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return mode;
};
