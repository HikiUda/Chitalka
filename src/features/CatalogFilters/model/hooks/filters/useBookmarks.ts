import { useCallback, useMemo } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { CheckboxType } from '../../../ui/CheckboxGroup';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { Bookmarks, BookmarksType } from '@/shared/kernel/manga';

export function useBookmarks() {
    const { setSearchParam } = useUrlSearchParams();
    const bookmarks = useCatalogFiltersStore.use.bookmarks();
    const setBookmarks = useCatalogFiltersStore.use.setBookmarks();

    const handleSetBookmarks = useCallback(
        (bookmarks: BookmarksType[]) => {
            setBookmarks(bookmarks);
            setSearchParam('bookmarks', bookmarks.join(','));
        },
        [setBookmarks, setSearchParam],
    );

    const checkboxes: CheckboxType<BookmarksType>[] = useMemo(() => {
        return Object.values(Bookmarks).map((bookmark) => ({
            value: bookmark,
            label: bookmark,
        }));
    }, []);

    return {
        values: bookmarks,
        onValuesChange: handleSetBookmarks,
        checkboxes,
    };
}
