import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RouteByPath } from './routerConfig';
import { RoutesConst, RoutesConstType } from './routesConst';

export function useRouteChange() {
    const location = useLocation();
    const [appRoute, setAppRoute] = useState<RoutesConstType>(RoutesConst.MAIN);

    useEffect(() => {
        Object.entries(RouteByPath).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(route);
            }
        });
    }, [location.pathname]);

    return appRoute;
}
