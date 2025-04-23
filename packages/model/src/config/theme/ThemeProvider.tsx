import { FC, ReactNode, useMemo, useState } from 'react';
import type { DisignTypes, ThemeTypes } from './types/theme';
import { Disign, Theme } from './const/theme';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    initialTheme?: ThemeTypes;
    initialDisign?: DisignTypes;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, initialDisign, children } = props;
    const [theme, setTheme] = useState<ThemeTypes>(initialTheme || Theme.LIGHT);
    const [disign, setDisign] = useState<DisignTypes>(initialDisign || Disign.RED);
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

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
