import { useContext } from 'react';
import type { AppDisignType } from './appThemeConst';
import { AppThemeContext } from './AppThemeContext';
import { AppDisign } from './appThemeConst';

interface useAppDisignReturn {
    toggleDisign: () => void;
    disign: AppDisignType;
}

export function useAppDisign(): useAppDisignReturn {
    const { disign, setDisign, theme } = useContext(AppThemeContext);

    const toggleDisign = (nextDisign?: AppDisignType) => {
        let newDisign: AppDisignType;
        if (nextDisign) {
            newDisign = nextDisign;
        } else {
            newDisign = disign === AppDisign.RED ? AppDisign.GREEN : AppDisign.RED;
        }
        setDisign?.(newDisign);
        document.body.className = `${newDisign} ${theme}`;
    };
    return { disign, toggleDisign };
}
