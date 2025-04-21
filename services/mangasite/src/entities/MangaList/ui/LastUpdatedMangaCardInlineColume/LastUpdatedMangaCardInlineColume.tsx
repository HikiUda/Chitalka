import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import cls from './LastUpdatedMangaCardInlineColume.module.scss';
import { LastUpdatedMangaCardInline } from '@/entities/MangaCard';
import { MangaListItemLastUpdatedType } from '@/shared/api/mangaList';

interface LastUpdatedMangaCardInlineColumeProps {
    className?: string;
    mangaList?: MangaListItemLastUpdatedType[];
}

export const LastUpdatedMangaCardInlineColume = (props: LastUpdatedMangaCardInlineColumeProps) => {
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
};
