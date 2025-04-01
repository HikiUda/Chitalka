import { useCallback, useRef } from 'react';

export const useIntersection = (onIntersect: () => void) => {
    const unsubscribe = useRef(() => {});

    return useCallback(
        (el: HTMLElement | null) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersect();
                    }
                });
            });
            if (el) {
                observer.observe(el);
                unsubscribe.current = () => observer.disconnect();
            } else {
                unsubscribe.current();
            }
        },
        [onIntersect],
    );
};
