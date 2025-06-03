import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import cls from './LogoMangaSite.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { getRoute } from '@/shared/kernel/router/routerConfig';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import ChitalkaSvg from '@/shared/assets/icon/logo/Chitalka.svg?react';
import CSvg from '@/shared/assets/icon/logo/C.svg?react';
import Gid from '@/shared/assets/animation/Gid/logo/shake.gif';
import { Icon } from '@/shared/deprecate-ui/Icon';

interface LogoMangaSiteProps {
    className?: string;
}

export const LogoMangaSite = memo((props: LogoMangaSiteProps) => {
    const { className } = props;

    return (
        <AppLink
            theme="primary"
            to={getRoute.MAIN()}
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
