import { isMobile } from 'react-device-detect';
import { mapHeaderContent } from '../../model/mapHeaderContent';
import { useRouteChange } from '@/shared/kernel/router';

export const Header = () => {
    const currentRoute = useRouteChange();

    return isMobile
        ? mapHeaderContent[currentRoute]?.mobile || mapHeaderContent.default.mobile
        : mapHeaderContent[currentRoute]?.desktop || mapHeaderContent.default.desktop;
};
