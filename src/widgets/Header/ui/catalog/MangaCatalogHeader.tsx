import { BookCatalogHeader } from './BookCatalogHeader';
import { getRoute } from '@/shared/kernel/router';
import { MangaCatalogFiltersSheet, MangaCatalogSortByOrder } from '@/features/BookCatalog';

const MangaCatalogHeader = () => {
    return (
        <BookCatalogHeader
            backLink={getRoute.MANGA_SECTION()}
            filters={<MangaCatalogFiltersSheet />}
            sortByOrder={<MangaCatalogSortByOrder />}
        />
    );
};
export const Header = MangaCatalogHeader;
