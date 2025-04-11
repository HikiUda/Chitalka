import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TabScroll } from '../TabScroll/TabScroll';
import { LastUpdatedMangaCardInlineColume } from '@/entities/MangaList';
import { LastUpdatedMangaApi } from '@/shared/api/mangaList';

interface MyLastUpdatedTabProps {
    className?: string;
}

const MyLastUpdatedTab: FC<MyLastUpdatedTabProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery(
        LastUpdatedMangaApi.getLastUpdatedInfinityQueryOptions('my'),
    );

    return (
        <TabScroll
            disabled={!hasNextPage}
            callback={() => fetchNextPage()}
            className={classNames('', {}, [className])}
            isFetching={isFetchingNextPage || isFetching}
        >
            <LastUpdatedMangaCardInlineColume mangaList={data} />
        </TabScroll>
    );
};
export default MyLastUpdatedTab;
