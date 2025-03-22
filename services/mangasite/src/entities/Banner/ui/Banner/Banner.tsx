import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import cls from './Banner.module.scss';

interface BannerProps {
    className?: string;
}

export const Banner = memo((props: BannerProps) => {
    const { className } = props;

    return <AppAdaptiveImage className={classNames(cls.Banner, {}, [className])} />;
});
