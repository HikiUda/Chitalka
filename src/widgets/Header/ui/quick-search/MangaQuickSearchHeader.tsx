import { QuickSearchButton } from './QuickSearchButton';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { MangaQuickSearch } from '@/features/BookQuickSearch';

const MangaQuickSearchHeader = () => {
    return (
        <HeaderLayout>
            <MangaQuickSearch trigger={<QuickSearchButton />} />
        </HeaderLayout>
    );
};
export const Header = MangaQuickSearchHeader;
