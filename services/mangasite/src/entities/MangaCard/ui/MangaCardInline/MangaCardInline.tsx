import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Heading } from '@packages/ui/src/shared/Heading';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';
import { VStack } from '@packages/ui/src/shared/Stack';
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
            noOpacityHover
            to={to}
            disable={!to}
            className={classNames(cls.MangaCardInline, {}, [className])}
        >
            <AppAdaptiveImage className={cls.img} img={img} />
            <VStack align="stretch" gap="4" className={cls.content}>
                <Heading
                    className={classNames(cls.title, {}, [getStyleLineClamp({ wordBreak: true })])}
                    HeadingTag="h4"
                    bold
                >
                    {title}
                </Heading>
                <span className={cls.subtitle}>{subtitle}</span>
                {children}
            </VStack>
        </AppLink>
    );
});
