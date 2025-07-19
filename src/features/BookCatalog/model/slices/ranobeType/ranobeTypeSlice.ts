import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { RanobeType } from '@/shared/kernel/book/ranobeType';

export type RanobeTypeSlice = {
    type: RanobeType[];
    setType: (type: RanobeType[]) => void;
};

export const ranobeTypeSliceInitialState: CatalogFilterInitialState<RanobeTypeSlice> = {
    type: [],
};

export const createRanobeTypeSlice: CatalogFilterSlice<RanobeTypeSlice> = (storeName) => (set) => ({
    ...ranobeTypeSliceInitialState,
    setType: (type) =>
        set(
            () => ({
                type,
            }),
            false,
            `${storeName}/setType`,
        ),
});
