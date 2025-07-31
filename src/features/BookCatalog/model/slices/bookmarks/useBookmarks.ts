import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { BookmarksSlice } from './bookmarksSlice';
import { Bookmarks } from '@/shared/kernel/book/bookmarks';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({});

export function useBookmarks(slice: CatalogFilterSliceSelector<BookmarksSlice>) {
    const bookmarks = slice.bookmarks();
    const setBookmarks = slice.setBookmarks();
    const t = useI18n();

    const checkboxes: CheckboxType<Bookmarks>[] = useMemo(() => {
        return Object.values(Bookmarks).map((bookmark) => ({
            value: bookmark,
            label: t(`bookmarks.${bookmark}`),
        }));
    }, [t]);

    return {
        values: bookmarks,
        onValuesChange: setBookmarks,
        checkboxes,
    };
}
