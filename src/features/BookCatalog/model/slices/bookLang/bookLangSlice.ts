import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { BookLang } from '@/shared/kernel/book/bookLang';

export type BookLangSlice = {
    bookLang: BookLang | undefined;
    setBookLang: (bookLang: BookLang | undefined) => void;
};

export const bookLangSliceInitialState: CatalogFilterInitialState<BookLangSlice> = {
    bookLang: undefined,
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
