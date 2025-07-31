import { CatalogPageLayout } from './CatalogPageLayout';
import { RanobeCatalogList } from './RanobeCatalogList';
import { Heading } from '@/shared/ui/kit/heading';
import { RanobeCatalogSearchInput, RanobeCatalogSortByOrder } from '@/features/BookCatalog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { createI18nModule } from '@/shared/kernel/i18n';

const RanobeCatalogFilters = lazyNamed(
    () => import('@/features/BookCatalog'),
    'RanobeCatalogFilters',
);

const { useI18n } = createI18nModule({
    ranobeCatalog: { ru: 'Каталог Ранобе', en: 'Ranobe Catalog' },
});

const RanobeCatalogPage = () => {
    const t = useI18n();
    return (
        <CatalogPageLayout
            title={
                <Heading color="primary" variant="h2">
                    {t('ranobeCatalog')}
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
