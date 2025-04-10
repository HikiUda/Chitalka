import { memo, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { BigFill, Select, SelectItem } from '@packages/ui/src/shared/Select';
import { Bookmarks, BookmarksType } from '@packages/model/src/entities/manga';
import { useGetUserMangaBookmark } from '../../model/api/useGetUserMangaBookmark';
import { useSetUserMangaBookmark } from '../../model/api/useSetUserMangaBookmark';
import { useDeleteUserMangaBookmark } from '../../model/api/useDeleteMangaBookmark';
import cls from './AddMangaToBookmarks.module.scss';

interface AddMangaToBookmarksProps {
    className?: string;
    mangaId: number;
}

const items = [
    { bookmark: Bookmarks.Reading },
    { bookmark: Bookmarks.Planned },
    { bookmark: Bookmarks.Readed },
    { bookmark: Bookmarks.Abandoned },
    { bookmark: Bookmarks.Postponed },
];

export const AddMangaToBookmarks = memo((props: AddMangaToBookmarksProps) => {
    const { className, mangaId } = props;
    const [bookmark, setBookmark] = useState<BookmarksType>();

    const { data } = useGetUserMangaBookmark(mangaId);
    const setUserBookmark = useSetUserMangaBookmark(mangaId);
    const deleteUserBookmark = useDeleteUserMangaBookmark(mangaId);

    return (
        <Select
            placeholder="+ Добавить в закладки"
            items={items}
            selectedKey={bookmark}
            onSelectionChange={setBookmark}
            className={classNames(cls.AddMangaToBookmarks, {}, [className])}
            selectButton={<BigFill />}
            max
        >
            {(item) => <SelectItem id={item.bookmark}>{item.bookmark}</SelectItem>}
        </Select>
    );
});
