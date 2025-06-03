import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routes, RoutesValues } from './routerConfig';

export function useRouteChange() {
    const location = useLocation();
    const [appRoute, setAppRoute] = useState<RoutesValues>(Routes.MAIN);

    useEffect(() => {
        Object.values(Routes).forEach((pattern) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(pattern);
            }
        });
    }, [location.pathname]);

    return appRoute;
}
