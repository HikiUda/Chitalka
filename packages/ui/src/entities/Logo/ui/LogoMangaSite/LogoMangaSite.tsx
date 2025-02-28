import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { AppLink } from '@ui/shared/AppLink';
import ChitalkaSvg from '@ui/assets/icon/logo/Chitalka.svg';
import Gid from '@ui/assets/animation/Gid/logo/shake.gif';
import { Icon } from '@ui/shared/Icon/Icon';
import cls from './LogoMangaSite.module.scss';

interface LogoMangaSiteProps {
    className?: string;
}

export const LogoMangaSite = memo((props: LogoMangaSiteProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.LogoMangaSite, {}, [className])}>
            <AppLink theme="primary" to={getMangaSiteRoute.main()}>
                <Icon Svg={ChitalkaSvg} width="150px" height="50px" />
            </AppLink>
            <img className={cls.charecter} src={Gid} alt="1" width="38px" height="51px" />
        </div>
    );
});
