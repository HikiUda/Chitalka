import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Heading } from '@ui/shared/Heading';
import { AppLink } from '@ui/shared/AppLink';
import { AppAdaptiveImage } from '@ui/shared/AppAdaptiveImage';
import { getStyleLineClamp } from '@ui/shared/StyleHooks';
import cls from './MangaCardInline.module.scss';

interface MangaCardInlineProps {
    className?: string;
    to?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}

export const MangaCardInline = memo((props: MangaCardInlineProps) => {
    const { className, to = '', img, title, subtitle, children } = props;

    return (
        <AppLink
            theme="none"
            to={to}
            disable={!to}
            className={classNames(cls.MangaCardInline, {}, [className])}
        >
            <AppAdaptiveImage className={cls.img} img={img} />
            <div className={cls.content}>
                <Heading
                    className={classNames(cls.title, {}, [getStyleLineClamp({ wordBreak: true })])}
                    HeaderTag="h4"
                    style="bold"
                >
                    {title}
                </Heading>
                <span className={cls.subtitle}>{subtitle}</span>
                {children}
            </div>
        </AppLink>
    );
});
