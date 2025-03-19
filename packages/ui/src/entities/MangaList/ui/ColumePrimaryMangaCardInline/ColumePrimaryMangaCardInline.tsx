import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@ui/shared/Stack';
import { PrimaryMangaCardInline } from '@ui/entities/MangaCard/ui/PrimaryMangaCardInline/PrimaryMangaCardInline';
import { Heading } from '@ui/shared/Heading';
import cls from './ColumePrimaryMangaCardInline.module.scss';

interface ColumePrimaryMangaCardInlineProps {
    className?: string;
    mangaList?: unknown[];
    title?: string;
}

export const ColumePrimaryMangaCardInline = memo((props: ColumePrimaryMangaCardInlineProps) => {
    const { className, mangaList, title } = props;

    return (
        <VStack max className={classNames('', {}, [className])}>
            {title && <Heading className={cls.title}>{title}</Heading>}
            {mangaList?.map((manga, ind) => (
                <PrimaryMangaCardInline key={ind} />
            ))}
        </VStack>
    );
});
