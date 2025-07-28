import { useGetRanobeCatalog } from '@/features/BookCatalog';
import { BookCard, BookGridLayout } from '@/entities/BookList';
import { getRoute } from '@/shared/kernel/router';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { RanobeHoverCard } from '@/widgets/BookHoverCard';

export const RanobeCatalogList = () => {
    const { data = [], isFetching, fetchNextPage } = useGetRanobeCatalog();

    const trottleFetchNext = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNext();
    });

    return (
        <BookGridLayout
            list={data}
            renderItem={({ id, urlId, title, type, rate, bookmark, cover }) => (
                <RanobeHoverCard
                    key={id}
                    ranobeId={urlId}
                    trigger={
                        <BookCard
                            adaptive="dynamic"
                            title={title}
                            subtitle={type}
                            img={cover}
                            label1={rate}
                            label2={bookmark}
                            to={getRoute.RANOBE(urlId)}
                        />
                    }
                />
            )}
            isLoading={isFetching}
            action={<div ref={intersect} />}
        />
    );
};
