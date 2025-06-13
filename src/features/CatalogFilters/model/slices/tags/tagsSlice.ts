import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';

export type TagsSlice = {
    tags: number[];
    notTags: number[];
    setTags: (tags: number[]) => void;
    setNotTags: (notTags: number[]) => void;
    resetTags: () => void;
};

export const tagsSliceInitialState: CatalogFilterInitialState<TagsSlice> = {
    tags: [],
    notTags: [],
};

export const createTagsSlice: CatalogFilterSlice<TagsSlice> = (storeName) => (set) => ({
    ...tagsSliceInitialState,
    setTags: (tags) => set(() => ({ tags }), false, `${storeName}/setTags`),
    setNotTags: (notTags) => set(() => ({ notTags }), false, `${storeName}/setNotTags`),
    resetTags: () => set(() => tagsSliceInitialState, false, `${storeName}/resetTags`),
});
