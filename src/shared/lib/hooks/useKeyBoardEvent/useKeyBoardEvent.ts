import { useCallback, useEffect } from 'react';

export function useKeyBoardEvent(callback: () => void, key: string) {
    const handleAuthEnter = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === key) {
                callback();
            }
        },
        [callback, key],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleAuthEnter);
        return () => {
            document.removeEventListener('keydown', handleAuthEnter);
        };
    }, [handleAuthEnter]);
}
