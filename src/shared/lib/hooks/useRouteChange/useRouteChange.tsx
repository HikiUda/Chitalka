import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RoutesConst, RoutesConstType } from '@/shared/config/router';
import { RouteByPath } from '@/shared/config/router/routerConfig';
//TODO for all app (not only for mangasite)
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
