import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, TagsSlice } from '../../types/catalogFilters';

export const createTagsSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    TagsSlice
> = (set) => ({
    tags: [],
    notTags: [],
    setTags: (tags) => set(() => ({ tags }), false, 'CatalogFiltersStore/setTags'),
    setNotTags: (notTags) => set(() => ({ notTags }), false, 'CatalogFiltersStore/setNotTags'),
});
