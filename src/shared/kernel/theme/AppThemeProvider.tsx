import { ReactNode, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppTheme, AppThemeColor } from './appThemeConfig';
import { AppThemeContext } from './appThemeContext';
import { resolveAppThemeMode } from './resolveAppThemeMode';
import { appThemeLocalStorage } from './appThemeLocalStorage';

type AppThemeProviderProps = {
    children: ReactNode;
};

function matchLocation(location: string): 'manga' | 'ranobe' | 'other' {
    if (location.match('manga')) return 'manga';
    if (location.match('ranobe')) return 'ranobe';
    return 'other';
}

export const AppThemeProvider = (props: AppThemeProviderProps) => {
    const { children } = props;
    const location = useLocation();
    const [theme, setTheme] = useState<AppTheme>({
        color: AppThemeColor.Brown,
        ...appThemeLocalStorage.get(),
    });

    const handleSetTheme = (newTheme: AppTheme) => {
        setTheme(newTheme);
        const resolvedMode = resolveAppThemeMode(newTheme.mode);
        document.body.className = `${resolvedMode}`;
        document.body.dataset.theme = `${newTheme.color}-${resolvedMode}`;
    };

    useEffect(() => {
        switch (matchLocation(location.pathname)) {
            case 'manga':
                if (theme.color === 'red') break;
                handleSetTheme({ ...theme, color: 'red' });
                break;
            case 'ranobe':
                if (theme.color === 'blue') break;
                handleSetTheme({ ...theme, color: 'blue' });
                break;
            default:
                if (theme.color === 'brown') break;
                handleSetTheme({ ...theme, color: 'brown' });
                break;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    useLayoutEffect(() => {
        const resolvedMode = resolveAppThemeMode(theme.mode);
        document.body.className = `${resolvedMode}`;
        document.body.dataset.theme = `${theme.color}-${resolvedMode}`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme: handleSetTheme,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [theme.mode, theme.color],
    );

    return <AppThemeContext.Provider value={defaultProps}>{children}</AppThemeContext.Provider>;
};
