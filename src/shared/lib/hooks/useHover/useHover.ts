import { useState, useCallback, useRef } from 'react';

// ? is useless hook
export function useHover<T extends HTMLElement>() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    const callbackRef = useCallback(
        (node: T | null) => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', onMouseEnter);
                ref.current.removeEventListener('mouseleave', onMouseLeave);
            }

            if (node) {
                node.addEventListener('mouseenter', onMouseEnter);
                node.addEventListener('mouseleave', onMouseLeave);
            }

            ref.current = node;
        },
        [onMouseEnter, onMouseLeave],
    );

    return { isHovered, hoverRef: callbackRef };
}
