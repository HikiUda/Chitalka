import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppAdaptiveImage } from '../AppAdaptiveImage';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    img?: string | null;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, img } = props;

    return <AppAdaptiveImage img={img} className={classNames(cls.Avatar, {}, [className])} />;
});
