import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface TagsSlice {
    tags: number[];
    notTags: number[];
    searchTags: string;
    setTags: (tags: number[]) => void;
    setNotTags: (notTags: number[]) => void;
    setSearchTags: (searchTags: string) => void;
    resetTags: () => void;
}

export const tagsSliceInitialState: Pick<TagsSlice, 'tags' | 'notTags' | 'searchTags'> = {
    tags: [],
    notTags: [],
    searchTags: '',
};

export const createTagsSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    TagsSlice
> = (set) => ({
    ...tagsSliceInitialState,
    setTags: (tags) => set(() => ({ tags }), false, 'CatalogFiltersStore/setTags'),
    setNotTags: (notTags) => set(() => ({ notTags }), false, 'CatalogFiltersStore/setNotTags'),
    setSearchTags: (searchTags) =>
        set(() => ({ searchTags }), false, 'CatalogFiltersStore/setSearchTags'),
    resetTags: () => set(() => tagsSliceInitialState, false, 'CatalogFiltersStore/resetTags'),
});
