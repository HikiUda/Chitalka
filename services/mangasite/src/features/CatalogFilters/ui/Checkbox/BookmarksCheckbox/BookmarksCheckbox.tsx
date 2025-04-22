import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@packages/ui/src/shared/Checkbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Bookmarks, BookmarksType } from '@packages/model/src/entities/manga';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';

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
