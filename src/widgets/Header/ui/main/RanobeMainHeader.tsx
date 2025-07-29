import { BookMainHeader } from './BookMainHeader';
import { RanobeQuickSearch } from '@/features/BookQuickSearch';
import { getRoute } from '@/shared/kernel/router';

const RanobeMainHeader = () => {
    return (
        <BookMainHeader
            catalogLink={getRoute.RANOBE_CATALOG()}
            quickSearch={(trigger) => <RanobeQuickSearch trigger={trigger} />}
        />
    );
};
export const Header = RanobeMainHeader;
