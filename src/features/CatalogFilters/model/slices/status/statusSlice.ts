import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { BookStatusType } from '@/shared/kernel/book';

//TODO rename BookStatusType
export type StatusSlice = {
    status: BookStatusType[];
    setStatus: (status: BookStatusType[]) => void;
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
