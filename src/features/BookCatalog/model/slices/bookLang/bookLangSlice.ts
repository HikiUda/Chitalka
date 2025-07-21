import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';
import { BookLang } from '@/shared/kernel/book/bookLang';

export type BookLangSlice = {
    bookLang: BookLang | 'all';
    setBookLang: (bookLang: BookLang | 'all') => void;
};

export const bookLangSliceInitialState: CatalogFilterInitialState<BookLangSlice> = {
    bookLang: 'all',
};

export const createBookLangSlice: CatalogFilterSlice<BookLangSlice> = (storeName) => (set) => ({
    ...bookLangSliceInitialState,
    setBookLang: (bookLang) =>
        set(
            () => ({
                bookLang,
            }),
            false,
            `${storeName}/setBookLang`,
        ),
});
