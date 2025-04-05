import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useRouteChange } from '@packages/model/src/lib/hooks/useRouteChange/useRouteChange';
import { HeaderLayout } from '@packages/ui/src/layout/HeaderLayout';
import { isMobile } from 'react-device-detect';
import { mapHeaderContent } from '../../model/config/mapHeaderContent';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    const currentRoute = useRouteChange();

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            {isMobile
                ? mapHeaderContent[currentRoute]?.mobile || mapHeaderContent.default.mobile
                : mapHeaderContent[currentRoute]?.desktop || mapHeaderContent.default.desktop}
        </HeaderLayout>
    );
};
