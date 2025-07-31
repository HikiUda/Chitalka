import { CatalogPageLayout } from './CatalogPageLayout';
import { MangaCatalogList } from './MangaCatalogList';
import { Heading } from '@/shared/ui/kit/heading';
import { MangaCatalogSearchInput, MangaCatalogSortByOrder } from '@/features/BookCatalog';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { createI18nModule } from '@/shared/kernel/i18n';

const MangaCatalogFilters = lazyNamed(
    () => import('@/features/BookCatalog'),
    'MangaCatalogFilters',
);

const { useI18n } = createI18nModule({
    mangaCatalog: { ru: 'Каталог Манги', en: 'Manga Catalog' },
});

const MangaCatalogPage = () => {
    const t = useI18n();
    return (
        <CatalogPageLayout
            title={
                <Heading color="primary" variant="h2">
                    {t('mangaCatalog')}
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
