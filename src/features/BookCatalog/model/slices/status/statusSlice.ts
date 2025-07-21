import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';
import { BookStatus } from '@/shared/kernel/book/bookStatus';

//TODO rename BookStatus
export type StatusSlice = {
    status: BookStatus[];
    setStatus: (status: BookStatus[]) => void;
};

export const statusSliceInitialState: CatalogFilterInitialState<StatusSlice> = {
    status: [],
};

export const createStatusSlice: CatalogFilterSlice<StatusSlice> = (storeName) => (set) => ({
    ...statusSliceInitialState,
    setStatus: (status) =>
        set(
            () => ({
                status,
            }),
            false,
            `${storeName}/setStatus`,
        ),
});
