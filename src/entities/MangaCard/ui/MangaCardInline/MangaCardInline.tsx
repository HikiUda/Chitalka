import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { getStyleLineClamp } from '@/shared/deprecate-ui/StyleHooks';
import { VStack } from '@/shared/deprecate-ui/Stack';
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
                    className={classNames(cls.title, {}, [getStyleLineClamp({ huphens: true })])}
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
