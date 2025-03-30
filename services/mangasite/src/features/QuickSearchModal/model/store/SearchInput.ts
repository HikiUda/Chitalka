import { create } from 'zustand';

interface UseSearchInputStoreInterface {
    search: string;
    setSearch: (search: string) => void;
}

export const useSearchInputStore = create<UseSearchInputStoreInterface>((set) => ({
    search: '',
    setSearch: (search: string) => set((_) => ({ search: search })),
}));
