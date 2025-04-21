import { FC, useEffect } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useClearInfinityPages } from '@packages/model/src/lib/hooks/useClearInfinityPages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TabScroll } from '../TabScroll/TabScroll';
import { LastUpdatedMangaCardInlineColume } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';

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
            className={classNames('', {}, [className])}
            isFetching={isFetchingNextPage || isFetching}
            queryParams="sortBy=updateDate"
        >
            <LastUpdatedMangaCardInlineColume mangaList={data} />
        </TabScroll>
    );
};
export default AllLastUpdatedTab;
