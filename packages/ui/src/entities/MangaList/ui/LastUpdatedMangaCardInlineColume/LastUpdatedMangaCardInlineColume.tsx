import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { LastUpdatedMangaCardInline } from '@ui/entities/MangaCard';
import { VStack } from '@ui/shared/Stack';
import cls from './LastUpdatedMangaCardInlineColume.module.scss';

interface LastUpdatedMangaCardInlineColumeProps {
    className?: string;
    mangaList?: unknown[];
}

export const LastUpdatedMangaCardInlineColume = memo(
    (props: LastUpdatedMangaCardInlineColumeProps) => {
        const { className, mangaList } = props;

        return (
            <VStack max className={classNames('', {}, [className])}>
                {mangaList?.map((manga, ind) => (
                    <LastUpdatedMangaCardInline className={cls.card} key={ind} />
                ))}
            </VStack>
        );
    },
);
