import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useInfiniteQuery } from '@tanstack/react-query';
import cls from './CatalogContent.module.scss';
import { CatalogApi } from '@/shared/api/mangaList';
import { CatalogCard } from '@/entities/MangaCard';
import {
    CatalogSearchInput,
    SortByOrderMenu,
    useGetCatalogFilters,
} from '@/features/CatalogFilters';
import { InfinityMangaList } from '@/features/InfinityMangaList';
import { TooltipManga } from '@/features/TooltipManga';

interface CatalogContentProps {
    className?: string;
}

export const CatalogContent: FC<CatalogContentProps> = (props) => {
    const { className } = props;
    const { getFilters } = useGetCatalogFilters();
    const { data, fetchNextPage, isLoading, isFetchingNextPage, refetch } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(getFilters),
    );

    return (
        <CardBlock className={classNames(cls.CatalogContent, {}, [className])}>
            <HStack className={cls.title} justify="between">
                <Heading color="primary" HeadingTag="h2">
                    Каталог
                </Heading>
                <SortByOrderMenu onApply={refetch} />
            </HStack>
            <CatalogSearchInput className={cls.input} />
            <InfinityMangaList
                list={data || []}
                renderList={(manga) => (
                    <TooltipManga
                        key={manga.id}
                        mangaId={manga.id}
                        trigger={<CatalogCard key={manga.id} manga={manga} />}
                    />
                )}
                fetchNextPage={fetchNextPage}
                isLoading={isLoading || isFetchingNextPage}
            />
        </CardBlock>
    );
};
