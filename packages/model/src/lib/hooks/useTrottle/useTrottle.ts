import { useCallback, useRef } from 'react';

export function useTrottle(callback: (...args: unknown[]) => void, delay: number) {
    const trottleRef = useRef<boolean>(false);
    return useCallback(
        (...args: unknown[]) => {
            if (!trottleRef.current) {
                callback(...args);
                trottleRef.current = true;
                setTimeout(() => {
                    trottleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
