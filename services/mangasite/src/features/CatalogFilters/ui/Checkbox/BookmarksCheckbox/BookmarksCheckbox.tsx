import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@packages/ui/src/shared/Checkbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Bookmarks } from '@packages/model/src/entities/manga';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';

interface BookmarksCheckboxProps {
    className?: string;
}

export const BookmarksCheckbox: FC<BookmarksCheckboxProps> = (props) => {
    const { className } = props;
    const bookmarks = useCatalogFiltersStore.use.bookmarks();
    const setBookmarks = useCatalogFiltersStore.use.setBookmarks();

    return (
        <CheckboxGroup
            value={bookmarks}
            onChange={setBookmarks}
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
