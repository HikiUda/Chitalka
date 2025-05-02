import { isMobile } from 'react-device-detect';
import { useRouteChange } from '@packages/model/src/lib/hooks/useRouteChange/useRouteChange';
import { mapBottomMenuContent } from '../../model/config/mapBottomMenuContent';

export const BottomMenu = () => {
    const currentRoute = useRouteChange();

    if (!isMobile) {
        return null;
    }

    if (mapBottomMenuContent[currentRoute] === null) {
        return null;
    }

    return mapBottomMenuContent[currentRoute] || mapBottomMenuContent.default;
};
