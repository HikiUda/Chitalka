import { BookMainHeader } from './BookMainHeader';
import { MangaQuickSearch } from '@/features/BookQuickSearch';
import { getRoute } from '@/shared/kernel/router';

const MangaMainHeader = () => {
    return (
        <BookMainHeader
            catalogLink={getRoute.MANGA_CATALOG()}
            quickSearch={(trigger) => <MangaQuickSearch trigger={trigger} />}
        />
    );
};
export const Header = MangaMainHeader;
