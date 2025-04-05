import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import ChitalkaSvg from '@ui/assets/icon/logo/Chitalka.svg';
import CSvg from '@ui/assets/icon/logo/C.svg';
import Gid from '@packages/ui/src/assets/animation/Gid/logo/shake.gif';
import { Icon } from '@packages/ui/src/shared/Icon';
import { isMobile } from 'react-device-detect';
import cls from './LogoMangaSite.module.scss';

interface LogoMangaSiteProps {
    className?: string;
}

export const LogoMangaSite = memo((props: LogoMangaSiteProps) => {
    const { className } = props;

    return (
        <AppLink
            theme="primary"
            to={getMangaSiteRoute.main()}
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
