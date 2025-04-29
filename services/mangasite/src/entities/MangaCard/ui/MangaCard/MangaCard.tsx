import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';

import Skeleton from 'react-loading-skeleton';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import { Heading } from '@packages/ui/src/shared/Heading';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';
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
