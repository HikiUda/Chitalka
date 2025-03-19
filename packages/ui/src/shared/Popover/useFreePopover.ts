import { preventDisableScroll } from '@packages/model/src/lib/helpers/preventDisableScroll/preventDisableScroll';
import { useCallback, useEffect, useState } from 'react';

export function useFreePopover() {
    const [isOpen, setIsOpen] = useState(false);

    const cancel = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    const handleIsOpne = (state: boolean) => {
        setIsOpen(state);
        preventDisableScroll(state);
    };

    useEffect(() => {
        window.addEventListener('scroll', cancel);
        return () => {
            window.removeEventListener('scroll', cancel);
        };
    }, [cancel]);
    return { isOpen, handleIsOpne };
}
