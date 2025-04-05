import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Heading } from '@ui/shared/Heading';
import { AppLink } from '@ui/shared/AppLink';
import { AppAdaptiveImage } from '@ui/shared/AppAdaptiveImage';
import { getStyleLineClamp } from '@ui/shared/StyleHooks';
import { VStack } from '@ui/shared/Stack';
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
        <AppLink to={to} disable={!to} className={classNames(cls.MangaCardInline, {}, [className])}>
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
