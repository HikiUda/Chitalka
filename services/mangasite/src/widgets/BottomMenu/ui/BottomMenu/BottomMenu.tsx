import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { BottomMenuLayout } from '@packages/ui/src/layout/BottomMenuLayout';
import { isMobile } from 'react-device-detect';
import { useRouteChange } from '@packages/model/src/lib/hooks/useRouteChange/useRouteChange';
import { mapBottomMenuContent } from '../../model/config/mapBottomMenuContent';
import cls from './BottomMenu.module.scss';

interface BottomMenuProps {
    className?: string;
}

export const BottomMenu: FC<BottomMenuProps> = (props) => {
    const { className } = props;

    const currentRoute = useRouteChange();

    if (!isMobile) {
        return null;
    }

    if (mapBottomMenuContent[currentRoute] === null) {
        return null;
    }

    return (
        <BottomMenuLayout className={classNames(cls.BottomMenu, {}, [className])}>
            {mapBottomMenuContent[currentRoute] || mapBottomMenuContent.default}
        </BottomMenuLayout>
    );
};
