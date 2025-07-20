import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { BookLangSlice } from './bookLangSlice';
import { BookLang } from '@/shared/kernel/book/bookLang';
import { SelectFieldItem } from '@/features/BookCatalog/ui/filters-build-blocks/SelectField';

export function useBookLang(slice: CatalogFilterSliceSelector<BookLangSlice>) {
    const bookLang = slice.bookLang();
    const setBookLang = slice.setBookLang();

    const items: SelectFieldItem<BookLang>[] = useMemo(() => {
        return Object.values(BookLang).map((lang) => ({
            value: lang,
            label: lang,
        }));
    }, []);

    return {
        value: bookLang,
        onValueChange: setBookLang,
        items,
    };
}
