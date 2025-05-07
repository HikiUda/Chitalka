import { useRouteChange } from '@/shared/lib/hooks/useRouteChange/useRouteChange';
import { isMobile } from 'react-device-detect';
import { mapHeaderContent } from '../../model/config/mapHeaderContent';

export const Header = () => {
    const currentRoute = useRouteChange();

    return isMobile
        ? mapHeaderContent[currentRoute]?.mobile || mapHeaderContent.default.mobile
        : mapHeaderContent[currentRoute]?.desktop || mapHeaderContent.default.desktop;
};
