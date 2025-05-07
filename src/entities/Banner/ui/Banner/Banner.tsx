import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import cls from './Banner.module.scss';

interface BannerProps {
    className?: string;
    banner: string | null;
}

export const Banner = memo((props: BannerProps) => {
    const { className, banner } = props;

    return <AppAdaptiveImage img={banner} className={classNames(cls.Banner, {}, [className])} />;
});
