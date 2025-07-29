import { BookCatalogHeader } from './BookCatalogHeader';
import { getRoute } from '@/shared/kernel/router';
import { RanobeCatalogFiltersSheet, RanobeCatalogSortByOrder } from '@/features/BookCatalog';

const RanobeCatalogHeader = () => {
    return (
        <BookCatalogHeader
            backLink={getRoute.RANOBE_SECTION()}
            filters={<RanobeCatalogFiltersSheet />}
            sortByOrder={<RanobeCatalogSortByOrder />}
        />
    );
};
export const Header = RanobeCatalogHeader;
