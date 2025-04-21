import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface TagsSlice {
    tags: number[];
    notTags: number[];
    setTags: (tags: number[]) => void;
    setNotTags: (notTags: number[]) => void;
    resetTags: () => void;
}

export const tagsSliceInitialState: Pick<TagsSlice, 'tags' | 'notTags'> = {
    tags: [],
    notTags: [],
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
    resetTags: () => set(() => tagsSliceInitialState, false, 'CatalogFiltersStore/resetTags'),
});
