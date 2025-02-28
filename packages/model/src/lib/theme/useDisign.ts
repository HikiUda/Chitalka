import { useContext } from 'react';
import type { DisignTypes } from './types/theme';
import { ThemeContext } from './ThemeContext';
import { Disign } from './const/theme';

interface UseDisignReturn {
    toggleDisign: () => void;
    disign: DisignTypes;
}

export function useDisign(): UseDisignReturn {
    const { disign, setDisign, theme } = useContext(ThemeContext);

    const toggleDisign = (nextDisign?: DisignTypes) => {
        let newDisign: DisignTypes;
        if (nextDisign) {
            newDisign = nextDisign;
        } else {
            newDisign = disign === Disign.RED ? Disign.GREEN : Disign.RED;
        }
        setDisign?.(newDisign);
        console.log(newDisign);
        document.body.className = `${newDisign} ${theme}`;
    };
    return { disign, toggleDisign };
}
