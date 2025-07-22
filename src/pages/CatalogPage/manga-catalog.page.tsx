import { CatalogPageLayout } from './CatalogPageLayout';
import { Heading } from '@/shared/ui/kit/heading';
import {
    MangaCatalogFilters,
    MangaCatalogSortByOrder,
    MangaCatalogSearchInput,
    useGetMangaCatalog,
} from '@/features/BookCatalog';
import { BookCard, BookGridLayout } from '@/entities/BookList';
import { getRoute } from '@/shared/kernel/router';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { MangaHoverCard } from '@/widgets/BookHoverCard';

const MangaCatalogPage = () => {
    const { data = [], isFetching, fetchNextPage } = useGetMangaCatalog();

    const trottleFetchNext = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNext();
    });

    return (
        <CatalogPageLayout
            title={
                <Heading color="primary" variant="h2">
                    Каталог Манги
                </Heading>
            }
            sortByOrder={<MangaCatalogSortByOrder />}
            input={<MangaCatalogSearchInput />}
            list={
                <BookGridLayout
                    list={data}
                    renderItem={({ id, urlId, title, type, rate, bookmark, cover }) => (
                        <MangaHoverCard
                            key={id}
                            mangaId={urlId}
                            trigger={
                                <BookCard
                                    adaptive="dynamic"
                                    title={title}
                                    subtitle={type}
                                    img={cover}
                                    label1={rate}
                                    label2={bookmark}
                                    to={getRoute.MANGA(urlId)}
                                />
                            }
                        />
                    )}
                    isLoading={isFetching}
                    action={<div ref={intersect} />}
                />
            }
            filters={<MangaCatalogFilters />}
        />
    );
};

export const Component = MangaCatalogPage;
