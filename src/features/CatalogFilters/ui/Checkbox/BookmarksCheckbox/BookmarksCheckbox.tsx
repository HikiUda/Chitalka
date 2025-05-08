import { FC } from 'react';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { Checkbox, CheckboxGroup } from '@/shared/ui/Checkbox';
import { HStack } from '@/shared/ui/Stack';
import { Bookmarks, BookmarksType } from '@/shared/kernel/manga';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

interface BookmarksCheckboxProps {
    className?: string;
}

export const BookmarksCheckbox: FC<BookmarksCheckboxProps> = (props) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();
    const bookmarks = useCatalogFiltersStore.use.bookmarks();
    const setBookmarks = useCatalogFiltersStore.use.setBookmarks();

    const handleSetBookmarks = (bookmarksArray: BookmarksType[]) => {
        setBookmarks(bookmarksArray);
        setSearchParam('bookmarks', bookmarksArray.join(','));
    };

    return (
        <CheckboxGroup
            value={bookmarks}
            onChange={handleSetBookmarks}
            label="Мои закладки"
            className={className}
            aria-label="bookmarks"
        >
            <HStack gap="16" justify="start" wrap="wrap">
                {Object.values(Bookmarks).map((bookmark) => (
                    <Checkbox key={bookmark} value={bookmark}>
                        {bookmark}
                    </Checkbox>
                ))}
            </HStack>
        </CheckboxGroup>
    );
};
