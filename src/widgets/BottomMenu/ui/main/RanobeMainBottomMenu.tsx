import { BookMainBottomMenu } from './BookMainBottomMenu';
import { getRoute } from '@/shared/kernel/router';

const RanobeMainBottomMenu = () => {
    return <BookMainBottomMenu catalogLink={getRoute.RANOBE_CATALOG()} />;
};
export const BottomMenu = RanobeMainBottomMenu;
