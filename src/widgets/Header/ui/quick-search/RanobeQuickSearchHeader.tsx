import { QuickSearchButton } from './QuickSearchButton';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { RanobeQuickSearch } from '@/features/BookQuickSearch';

const RanobeQuickSearchHeader = () => {
    return (
        <HeaderLayout>
            <RanobeQuickSearch trigger={<QuickSearchButton />} />
        </HeaderLayout>
    );
};
export const Header = RanobeQuickSearchHeader;
