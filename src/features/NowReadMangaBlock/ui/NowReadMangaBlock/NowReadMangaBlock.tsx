import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { CardBlock } from '@/shared/deprecate-ui/CardBlock';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getStyleLineClamp } from '@/shared/deprecate-ui/StyleHooks';
import cls from './NowReadMangaBlock.module.scss';
import { MangaCardInlineColumn } from '@/entities/MangaList';
import { CatalogApi } from '@/shared/api/deprecated/mangaList';
import { PrimaryMangaCardInline } from '@/entities/MangaCard';

interface NowReadMangaBlockProps {
    className?: string;
}

export const NowReadMangaBlock: FC<NowReadMangaBlockProps> = (props) => {
    const { className } = props;

    //TODO createDate not updateDate
    const { data: newManga, isLoading: newMangaIsLoading } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(() => ({ sortBy: 'createDate', order: 'desc' }), 3),
    );
    const { data: ratingManga, isLoading: ratingMangaIsLoading } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(() => ({ sortBy: 'rating', order: 'desc' }), 4),
    );
    const { data: viewedManga, isLoading: viewedMangaIsLoading } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(() => ({ sortBy: 'views', order: 'desc' }), 5),
    );

    return (
        <CardBlock className={classNames(cls.NowReadMangaBlock, {}, [className])}>
            <Heading className={cls.title} HeadingTag="h2" color="primary">
                Сейчас читают
            </Heading>
            <div className={cls.row}>
                <Heading
                    HeadingTag="h3"
                    color="secondary"
                    className={classNames(cls.rowTitle, {}, [
                        getStyleLineClamp({ lineClamp: '1' }),
                    ])}
                >
                    Новинки
                </Heading>
                <Heading
                    HeadingTag="h3"
                    color="secondary"
                    className={classNames(cls.rowTitle, {}, [
                        getStyleLineClamp({ lineClamp: '1' }),
                    ])}
                >
                    Рейтинговые
                </Heading>
                <Heading
                    HeadingTag="h3"
                    color="secondary"
                    className={classNames(cls.rowTitle, {}, [
                        getStyleLineClamp({ lineClamp: '1' }),
                    ])}
                >
                    Просматриваемые
                </Heading>
                <MangaCardInlineColumn
                    className={cls.card}
                    list={newManga || []}
                    renderItem={(manga) => <PrimaryMangaCardInline key={manga.id} manga={manga} />}
                    isLoading={newMangaIsLoading}
                />
                <MangaCardInlineColumn
                    className={cls.card}
                    list={ratingManga?.slice(0, 3) || []}
                    renderItem={(manga) => <PrimaryMangaCardInline key={manga.id} manga={manga} />}
                    isLoading={ratingMangaIsLoading}
                />
                <MangaCardInlineColumn
                    className={cls.card}
                    list={viewedManga?.slice(0, 3) || []}
                    renderItem={(manga) => <PrimaryMangaCardInline key={manga.id} manga={manga} />}
                    isLoading={viewedMangaIsLoading}
                />
            </div>
        </CardBlock>
    );
};
