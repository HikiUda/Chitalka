import { isMobile } from 'react-device-detect';
import { mapBottomMenuContent } from './mapBottomMenuContent';
import { useRouteChange } from '@/shared/kernel/router';

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
