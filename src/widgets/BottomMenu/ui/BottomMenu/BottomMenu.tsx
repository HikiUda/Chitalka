import { isMobile } from 'react-device-detect';
import { useRouteChange } from '@/shared/lib/hooks/useRouteChange/useRouteChange';
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
