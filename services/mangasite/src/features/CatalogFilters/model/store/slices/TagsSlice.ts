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
    switchTag: (tag, toState) =>
        set(
            (state) => {
                switch (toState) {
                    case 'include':
                        return { tags: state.tags.concat([tag]) };
                    case 'exclude':
                        return {
                            notTags: state.notTags.concat([tag]),
                            tags: state.tags.filter((g) => g !== tag),
                        };
                    default:
                        return { notTags: state.notTags.filter((g) => g !== tag) };
                }
            },
            false,
            'CatalogFiltersStore/switchTag',
        ),
});
