import { mapHeaderContent } from './mapHeaderContent';
import { useRouteChange } from '@/shared/kernel/router';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

export const Header = () => {
    const isWidthLg = useWindowSize.use.isWidthLg();
    const currentRoute = useRouteChange();

    return !isWidthLg
        ? mapHeaderContent[currentRoute]?.mobile || mapHeaderContent.default.mobile
        : mapHeaderContent[currentRoute]?.desktop || mapHeaderContent.default.desktop;
};
