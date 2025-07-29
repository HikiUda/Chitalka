import { BookMainBottomMenu } from './BookMainBottomMenu';
import { getRoute } from '@/shared/kernel/router';

const MangaMainBottomMenu = () => {
    return <BookMainBottomMenu catalogLink={getRoute.MANGA_CATALOG()} />;
};
export const BottomMenu = MangaMainBottomMenu;
