import { useContext } from 'react';
import type { ThemeTypes } from './types/theme';
import { ThemeContext } from './ThemeContext';
import { Theme } from './const/theme';

interface UseThemeReturn {
    toggleTheme: () => void;
    theme: ThemeTypes;
}

export function useTheme(): UseThemeReturn {
    const { theme, setTheme, disign } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme: ThemeTypes = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        document.body.className = `${disign} ${newTheme}`;
    };
    return { theme, toggleTheme };
}
