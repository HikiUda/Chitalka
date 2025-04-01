import { create } from 'zustand';
import { createSelectorsForVanillaStore } from '@packages/model/src/lib/zustand/createSelectorsForVanillaStore';
import { devtools } from 'zustand/middleware';

interface UseQuickSearchStoreInterface {
    search: string;
    setSearch: (search: string) => void;
}

export const useQuickSearchStoreBase = create<UseQuickSearchStoreInterface>()(
    devtools(
        (set) => ({
            search: '',
            setSearch: (search: string) => set(() => ({ search }), false, 'setSearch'),
        }),
        { name: 'QuickSearch' },
    ),
);

export const useQuickSearchStore = createSelectorsForVanillaStore(useQuickSearchStoreBase);
