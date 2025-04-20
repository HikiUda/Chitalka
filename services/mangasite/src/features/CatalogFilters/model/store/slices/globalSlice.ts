import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, GlobalSlice } from '../../types/catalogFilters';

const initialState = {
    type: [],
    status: [],
    bookmarks: [],
    genres: [],
    notGenres: [],
    tags: [],
    notTags: [],
    ageRateFrom: NaN,
    ageRateTo: NaN,
    chapterCountFrom: NaN,
    chapterCountTo: NaN,
    rateCountFrom: NaN,
    rateCountTo: NaN,
    rateFrom: NaN,
    rateTo: NaN,
    releaseDateFrom: null,
    releaseDateTo: null,
};

function clearObj<T extends object>(original: T) {
    return Object.fromEntries(
        Object.entries(original).filter(
            ([_, value]) => value !== null && value !== undefined && !Number.isNaN(value),
        ),
    );
}

export const createGlobalSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    GlobalSlice
> = (set, get) => ({
    resetAll: () => set(() => initialState, false, 'CatalogFiltersStore/resetAll'),
    getFilters: () =>
        clearObj({
            search: get().search,
            sortBy: get().sortBy,
            order: get().order,
            type: get().type,
            status: get().status,
            bookmarks: get().bookmarks,
            genres: get().genres,
            notGenres: get().notGenres,
            tags: get().tags,
            notTags: get().notTags,
            ageRateFrom: get().ageRateFrom,
            ageRateTo: get().ageRateTo,
            chapterCountFrom: get().chapterCountFrom,
            chapterCountTo: get().chapterCountTo,
            rateCountFrom: get().rateCountFrom,
            rateCountTo: get().rateCountTo,
            rateFrom: get().rateFrom,
            rateTo: get().rateTo,
            releaseDateFrom: get().releaseDateFrom?.toString(),
            releaseDateTo: get().releaseDateTo?.toString(),
        }),
});
