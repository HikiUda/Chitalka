import { useCallback, useEffect, useState } from 'react';

export function useHideLayout(mayHide: boolean = false) {
    const [hidden, setHidden] = useState(false);

    const toggleHidden = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('main')) setHidden((prev) => !prev);
    }, []);

    const setHiddenTrue = useCallback(() => {
        setHidden(true);
    }, []);

    useEffect(() => {
        if (mayHide) {
            document.addEventListener('scroll', setHiddenTrue);
            document.addEventListener('click', toggleHidden);
        }

        return () => {
            if (mayHide) {
                document.removeEventListener('scroll', setHiddenTrue);
                document.removeEventListener('click', toggleHidden);
            }
        };
    }, [mayHide, setHiddenTrue, toggleHidden]);

    return { hidden };
}
