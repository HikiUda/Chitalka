import { FC, ReactNode, useMemo, useState } from 'react';
import { AppDisign, AppTheme, type AppThemeType, AppDisignType } from './appThemeConst';
import { AppThemeContext } from './AppThemeContext';

interface AppThemeProviderProps {
    initialTheme?: AppThemeType;
    initialDisign?: AppDisignType;
    children: ReactNode;
}

const AppThemeProvider: FC<AppThemeProviderProps> = (props) => {
    const { initialTheme, initialDisign, children } = props;
    const [theme, setTheme] = useState<AppThemeType>(initialTheme || AppTheme.LIGHT);
    const [disign, setDisign] = useState<AppDisignType>(initialDisign || AppDisign.RED);
    document.body.className = `${disign} ${theme}`;

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
            disign,
            setDisign,
        }),
        [theme, disign],
    );

    return <AppThemeContext.Provider value={defaultProps}>{children}</AppThemeContext.Provider>;
};

export default AppThemeProvider;
