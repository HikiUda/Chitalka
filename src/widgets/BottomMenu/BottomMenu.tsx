import { memo } from 'react';
import { mapBottomMenuContent } from './mapBottomMenuContent';
import { useRouteChange } from '@/shared/kernel/router';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

export const BottomMenu = memo(() => {
    const isWidthLg = useWindowSize.use.isWidthLg();
    const currentRoute = useRouteChange();

    if (isWidthLg) {
        return null;
    }

    if (mapBottomMenuContent[currentRoute] === null) {
        return null;
    }

    return mapBottomMenuContent[currentRoute] || mapBottomMenuContent.default;
});
BottomMenu.displayName = 'BottomMenu';
