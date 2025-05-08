import { useState, useCallback, useEffect } from 'react';

export function useHideLayout() {
    const [hidden, setHidden] = useState(false);

    const toggleHidden = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('main')) setHidden((prev) => !prev);
    }, []);

    const setHiddenTrue = useCallback(() => {
        setHidden(true);
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', setHiddenTrue);
        document.addEventListener('click', toggleHidden);

        return () => {
            document.removeEventListener('scroll', setHiddenTrue);
            document.removeEventListener('click', toggleHidden);
        };
    }, [setHiddenTrue, toggleHidden]);

    return { hidden };
}
