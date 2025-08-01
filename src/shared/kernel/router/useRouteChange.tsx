import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routes } from './routerConfig';

export function useRouteChange() {
    const location = useLocation();
    const [appRoute, setAppRoute] = useState<Routes>(Routes.MAIN);

    useEffect(() => {
        Object.values(Routes).forEach((pattern) => {
            if (pattern === '*') return;
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(pattern);
            }
        });
    }, [location.pathname]);

    return appRoute;
}
