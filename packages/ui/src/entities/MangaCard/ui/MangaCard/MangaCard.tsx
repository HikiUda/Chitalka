import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';

import { Heading } from '@ui/shared/Heading';
import { AppLink } from '@ui/shared/AppLink';
import { AppAdaptiveImage } from '@ui/shared/AppAdaptiveImage';
import { getStyleLineClamp } from '@ui/shared/StyleHooks';
import Skeleton from 'react-loading-skeleton';
import cls from './MangaCard.module.scss';

type MangaCardAdaptive = 'dynamic' | 'media';

interface MangaCardProps {
    className?: string;
    adaptive?: MangaCardAdaptive;
    to?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    label1?: ReactNode;
    label2?: ReactNode;
    label3?: ReactNode;
}

export const MangaCard = memo((props: MangaCardProps) => {
    const {
        className,
        adaptive = 'media',
        to = '',
        img,
        title,
        subtitle,
        label1,
        label2,
        label3,
    } = props;
    return (
        <AppLink
            theme="none"
            to={to}
            disable={!to}
            className={classNames(cls.MangaCard, {}, [className, cls[adaptive]])}
        >
            <AppAdaptiveImage
                loadFallback={
                    <Skeleton
                        style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }}
                    />
                }
                className={cls.img}
                img={img}
            >
                {label1 && <span className={cls.label1}>{label1}</span>}
                {label2 && <span className={cls.label2}>{label2}</span>}
                {label3 && <span className={cls.label3}>{label3}</span>}
            </AppAdaptiveImage>

            <Heading
                className={classNames(cls.title, {}, [getStyleLineClamp({ huphens: true })])}
                HeaderTag="h4"
                style="bold"
            >
                {title}
            </Heading>
            <span
                className={classNames(cls.subtitle, {}, [
                    getStyleLineClamp({ huphens: true, wordBreak: true, lineClamp: '1' }),
                ])}
            >
                {subtitle}
            </span>
        </AppLink>
    );
});
