import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { MangaStatusType } from '@/shared/kernel/manga';

//TODO rename MangaStatusType
export type StatusSlice = {
    status: MangaStatusType[];
    setStatus: (status: MangaStatusType[]) => void;
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
