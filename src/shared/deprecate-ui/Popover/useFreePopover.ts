import { useCallback, useEffect, useState } from 'react';

export function useFreePopover() {
    const [isOpen, setIsOpen] = useState(false);

    const cancel = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    const handleIsOpen = (state: boolean) => {
        setIsOpen(state);
        setTimeout(() => {
            document.documentElement.style = '';
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', cancel);
        return () => {
            window.removeEventListener('scroll', cancel);
        };
    }, [cancel]);
    return { isOpen, handleIsOpen };
}
