import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import cls from './LogoMangaSite.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { getRoute } from '@/shared/config/router/routerConfig';
import { AppLink } from '@/shared/ui/AppLink';
import ChitalkaSvg from '@/shared/assets/icon/logo/Chitalka.svg';
import CSvg from '@/shared/assets/icon/logo/C.svg';
import Gid from '@/shared/assets/animation/Gid/logo/shake.gif';
import { Icon } from '@/shared/ui/Icon';

interface LogoMangaSiteProps {
    className?: string;
}

export const LogoMangaSite = memo((props: LogoMangaSiteProps) => {
    const { className } = props;

    return (
        <AppLink
            theme="primary"
            to={getRoute.main()}
            className={classNames(cls.LogoMangaSite, {}, [className])}
        >
            <Icon
                Svg={isMobile ? CSvg : ChitalkaSvg}
                width={isMobile ? '40px' : '150px'}
                height="50px"
            />
            <img className={cls.charecter} src={Gid} alt="1" width="38px" height="51px" />
        </AppLink>
    );
});
