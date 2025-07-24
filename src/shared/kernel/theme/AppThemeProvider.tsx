import { ReactNode, useEffect, useMemo, useState } from 'react';
import { AppTheme, AppThemeColor } from './appThemeConfig';
import { AppThemeContext } from './appThemeContext';
import { resolveAppThemeMode } from './resolveAppThemeMode';
import { appThemeLocalStorage } from './appThemeLocalStorage';

type AppThemeProviderProps = {
    children: ReactNode;
};

export const AppThemeProvider = (props: AppThemeProviderProps) => {
    const { children } = props;
    const [theme, setTheme] = useState<AppTheme>({
        color: AppThemeColor.Red,
        ...appThemeLocalStorage.get(),
    });

    useEffect(() => {
        const resolvedMode = resolveAppThemeMode(theme.mode);
        document.body.className = `${resolvedMode}`;
        document.body.dataset.theme = `${theme.color}-${resolvedMode}`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [theme.mode, theme.color],
    );

    return <AppThemeContext.Provider value={defaultProps}>{children}</AppThemeContext.Provider>;
};
