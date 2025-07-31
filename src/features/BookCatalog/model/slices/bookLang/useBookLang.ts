import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { BookLangSlice } from './bookLangSlice';
import { BookLang } from '@/shared/kernel/book/bookLang';
import { SelectFieldItem } from '@/features/BookCatalog/ui/filters-build-blocks/SelectField';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({
    all: { ru: 'Все', en: 'All' },
    ru: { ru: 'На русском', en: 'In Russian' },
    en: { ru: 'На английском', en: 'In English' },
});

export function useBookLang(slice: CatalogFilterSliceSelector<BookLangSlice>) {
    const bookLang = slice.bookLang();
    const setBookLang = slice.setBookLang();
    const t = useI18n();

    const items: SelectFieldItem<BookLang | 'all'>[] = useMemo(() => {
        return ['all' as const, ...Object.values(BookLang)].map((lang) => ({
            value: lang,
            label: t(lang),
        }));
    }, [t]);

    return {
        value: bookLang,
        onValueChange: setBookLang,
        items,
    };
}
