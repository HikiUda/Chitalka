import { useEffect } from 'react';
import { CatalogPageLayout } from './CatalogPageLayout';
import { Heading } from '@/shared/ui/kit/heading';
import {
    MangaCatalogFilters,
    MangaCatalogSortByOrder,
    MangaCatalogSearchInput,
    useGetMangaCatalog,
    useInitMangaFilters,
} from '@/features/CatalogFilters';
import { MangaCard, MangaGridLayout } from '@/entities/ComicList';
import { getRoute } from '@/shared/kernel/router';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';

const MangaCatalogPage = () => {
    const { initMangaFilters } = useInitMangaFilters();
    useEffect(() => {
        initMangaFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <MangaGridLayout
                    list={data}
                    renderItem={({ id, urlId, title, type, rate, bookmark, cover }) => (
                        <MangaCard
                            key={id}
                            adaptive="dynamic"
                            title={title}
                            subtitle={type}
                            img={cover}
                            label1={rate}
                            label2={bookmark}
                            to={getRoute.MANGA(urlId)}
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
