import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { CardBlock } from '@/shared/deprecate-ui/CardBlock';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { useInfiniteQuery } from '@tanstack/react-query';
import cls from './CatalogContent.module.scss';
import { CatalogApi } from '@/shared/api/deprecated/mangaList';
import { CatalogCard } from '@/entities/MangaCard';
import {
    CatalogSearchInput,
    SortByOrderMenu,
    useGetCatalogFilters,
} from '@/features/CatalogFilters';
import { HoverCardManga } from '@/widgets/HoverCardManga';
import { InfinityMangaList } from '@/entities/MangaList';

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
                renderItem={(manga) => (
                    <HoverCardManga
                        key={manga.id}
                        mangaId={manga.urlId}
                        trigger={<CatalogCard key={manga.id} manga={manga} />}
                    />
                )}
                fetchNextPage={fetchNextPage}
                isLoading={isLoading || isFetchingNextPage}
            />
        </CardBlock>
    );
};
