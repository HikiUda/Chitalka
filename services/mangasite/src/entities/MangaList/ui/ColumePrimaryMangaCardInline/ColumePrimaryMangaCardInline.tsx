import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';

import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import cls from './ColumePrimaryMangaCardInline.module.scss';
import { PrimaryMangaCardInline } from '@/entities/MangaCard';

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
            {mangaList?.map((manga, ind) => <PrimaryMangaCardInline key={ind} />)}
        </VStack>
    );
});
