import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { LastUpdatedMangaCardInline, MangaListItemLastUpdatedType } from '@ui/entities/MangaCard';
import { VStack } from '@ui/shared/Stack';
import cls from './LastUpdatedMangaCardInlineColume.module.scss';

interface LastUpdatedMangaCardInlineColumeProps {
    className?: string;
    mangaList?: MangaListItemLastUpdatedType[];
}

export const LastUpdatedMangaCardInlineColume = memo(
    (props: LastUpdatedMangaCardInlineColumeProps) => {
        const { className, mangaList } = props;

        return (
            <VStack max className={classNames('', {}, [className])}>
                {mangaList?.map((manga, ind) => (
                    <LastUpdatedMangaCardInline
                        manga={manga}
                        className={mangaList.length - 1 === ind ? '' : cls.card}
                        key={ind}
                    />
                ))}
            </VStack>
        );
    },
);
