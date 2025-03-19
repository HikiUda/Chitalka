import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MangaSiteRoutes, MangaSiteRoutesType } from '@model/config/router';
import { MangaSiteRouteByPath } from '@model/config/router/mangaSiteRouter';
//TODO for all app (not only for mangasite)
export function useRouteChange() {
    const location = useLocation();
    const [appRoute, setAppRoute] = useState<MangaSiteRoutesType>(MangaSiteRoutes.MAIN);

    useEffect(() => {
        Object.entries(MangaSiteRouteByPath).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                setAppRoute(route);
            }
        });
    }, [location.pathname]);

    return appRoute;
}
