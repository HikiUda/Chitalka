import { FC, useEffect } from 'react';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TabScroll } from '../TabScroll/TabScroll';
import cls from './AllLastUpdatedTab.module.scss';
import { MangaCardInlineColumn } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/deprecated/mangaList';
import { LastUpdatedMangaCardInline } from '@/entities/MangaCard';

interface AllLastUpdatedTabProps {
    className?: string;
}

const AllLastUpdatedTab: FC<AllLastUpdatedTabProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } = useInfiniteQuery(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions(),
    );
    const clearPages = useClearInfinityPages(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions().queryKey,
    );

    useEffect(() => {
        return () => {
            clearPages();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabScroll
            disabled={!hasNextPage || (data?.length || 1) >= 50}
            callback={() => fetchNextPage()}
            className={className}
            searchParams="sortBy=updateDate"
        >
            <MangaCardInlineColumn
                list={data || []}
                renderItem={(manga, ind) => (
                    <LastUpdatedMangaCardInline
                        key={ind}
                        manga={manga}
                        className={data?.length === ind + 1 ? '' : cls.card}
                    />
                )}
                isLoading={isFetchingNextPage || isFetching}
                skeletonsCount={10}
            />
        </TabScroll>
    );
};
export default AllLastUpdatedTab;
