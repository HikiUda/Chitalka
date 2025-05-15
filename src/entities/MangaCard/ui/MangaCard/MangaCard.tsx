import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import Skeleton from 'react-loading-skeleton';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { getStyleLineClamp } from '@/shared/deprecate-ui/StyleHooks';
import cls from './MangaCard.module.scss';

export type MangaCardAdaptive = 'dynamic' | 'media';

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
            to={to}
            disable={!to}
            noOpacityHover
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
                {label1 != null ? <span className={cls.label1}>{label1}</span> : null}
                {label2 != null ? <span className={cls.label2}>{label2}</span> : null}
                {label3 != null ? <span className={cls.label3}>{label3}</span> : null}
            </AppAdaptiveImage>

            <Heading
                className={classNames(cls.title, {}, [getStyleLineClamp({ huphens: true })])}
                HeadingTag="h4"
                bold
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
