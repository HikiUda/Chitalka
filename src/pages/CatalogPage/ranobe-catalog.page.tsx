import { CatalogPageLayout } from './CatalogPageLayout';
import { RanobeCatalogList } from './RanobeCatalogList';
import { Heading } from '@/shared/ui/kit/heading';
import { RanobeCatalogSearchInput, RanobeCatalogSortByOrder } from '@/features/BookCatalog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeCatalogFilters = lazyNamed(
    () => import('@/features/BookCatalog'),
    'RanobeCatalogFilters',
);

const RanobeCatalogPage = () => {
    return (
        <CatalogPageLayout
            title={
                <Heading color="primary" variant="h2">
                    Каталог Ранобе
                </Heading>
            }
            sortByOrder={<RanobeCatalogSortByOrder />}
            input={<RanobeCatalogSearchInput />}
            list={<RanobeCatalogList />}
            filters={<RanobeCatalogFilters />}
        />
    );
};

export const Component = RanobeCatalogPage;
