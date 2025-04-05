import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { TabScroll } from '../TabScroll/TabScroll';
import { LastUpdatedMangaCardInlineColume } from '@/entities/MangaList';
import { useGetLastUpdatedMangas } from '@/entities/MangaCard';

interface AllLastUpdatedTabProps {
    className?: string;
}

const AllLastUpdatedTab: FC<AllLastUpdatedTabProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
        useGetLastUpdatedMangas();

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
export default AllLastUpdatedTab;
