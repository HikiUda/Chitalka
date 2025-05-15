import { StateCreator } from 'zustand';
import { DateValue } from '@/shared/deprecate-ui/DatePicker';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface ReleaseDateSlice {
    releaseDateFrom: DateValue | null;
    releaseDateTo: DateValue | null;
    setReleaseDateFrom: (releaseDateFrom: DateValue | null) => void;
    setReleaseDateTo: (releaseDateTo: DateValue | null) => void;
}

export const releaseDateSliceInitialState: Pick<
    ReleaseDateSlice,
    'releaseDateFrom' | 'releaseDateTo'
> = {
    releaseDateFrom: null,
    releaseDateTo: null,
};

export const createReleaseDateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ReleaseDateSlice
> = (set) => ({
    ...releaseDateSliceInitialState,
    setReleaseDateFrom: (releaseDateFrom) =>
        set(
            () => ({
                releaseDateFrom,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateFrom',
        ),
    setReleaseDateTo: (releaseDateTo) =>
        set(
            () => ({
                releaseDateTo,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateTo',
        ),
});
