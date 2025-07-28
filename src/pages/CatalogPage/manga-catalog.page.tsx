import { CatalogPageLayout } from './CatalogPageLayout';
import { MangaCatalogList } from './MangaCatalogList';
import { Heading } from '@/shared/ui/kit/heading';
import { MangaCatalogSearchInput, MangaCatalogSortByOrder } from '@/features/BookCatalog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaCatalogFilters = lazyNamed(
    () => import('@/features/BookCatalog'),
    'MangaCatalogFilters',
);

const MangaCatalogPage = () => {
    return (
        <CatalogPageLayout
            title={
                <Heading color="primary" variant="h2">
                    Каталог Манги
                </Heading>
            }
            sortByOrder={<MangaCatalogSortByOrder />}
            input={<MangaCatalogSearchInput />}
            list={<MangaCatalogList />}
            filters={<MangaCatalogFilters />}
        />
    );
};

export const Component = MangaCatalogPage;
