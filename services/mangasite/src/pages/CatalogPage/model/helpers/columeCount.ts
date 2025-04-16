import { useEffect, useState } from 'react';

export function useGetColumeCount() {
    const [columeCount, setColumeCount] = useState(0);
    const handler = () => {
        const width = window.innerWidth;
        if (width > 991 && columeCount !== 5) setColumeCount(5);
        if (width <= 991 && width > 820 && columeCount !== 6) setColumeCount(6);
        if (width <= 820 && width > 620 && columeCount !== 5) setColumeCount(5);
        if (width <= 620 && width > 550 && columeCount !== 4) setColumeCount(4);
        if (width <= 550 && width > 380 && columeCount !== 3) setColumeCount(3);
        if (width <= 380 && columeCount !== 2) setColumeCount(2);
    };
    useEffect(() => {
        if (!columeCount) handler();
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return columeCount;
}
