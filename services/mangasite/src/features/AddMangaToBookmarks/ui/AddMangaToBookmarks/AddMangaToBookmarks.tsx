import { memo, useCallback } from 'react';
import { Menu, MenuItem } from '@packages/ui/src/shared/Menu';
import ArrowSvg from '@packages/ui/src/assets/icon/common/sliderArrow.svg';
import { Button } from '@packages/ui/src/shared/Button';
import { Loader } from '@packages/ui/src/shared/Loader';
import { useQuery } from '@tanstack/react-query';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { BookmarksType } from '@packages/model/src/entities/manga';
import { MangaUserBookmarkApi } from '../../model/api/mangaUserBookmarkApi';
import { bookmarks } from '../../model/const/bookmarks';
import { useSetMangaUserBookmark } from '../../model/api/hooks/useSetMangaUserBookmark';
import { useDeleteUserMangaBookmark } from '../../model/api/hooks/useDeleteMangaUserBookmark';
import cls from './AddMangaToBookmarks.module.scss';

interface AddMangaToBookmarksProps {
    className?: string;
    mangaId: number;
}

export const AddMangaToBookmarks = memo((props: AddMangaToBookmarksProps) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useQuery(MangaUserBookmarkApi.getQueryOption(mangaId));
    const { setBookmark, isPending: isPendingOnSet } = useSetMangaUserBookmark(mangaId);
    const { deleteBookmark, isPending: isPendingOnDelete } = useDeleteUserMangaBookmark(mangaId);

    const isPending = isPendingOnDelete || isPendingOnSet || isLoading;

    const button = (
        <Button
            className={classNames(cls.button, {}, [className, getFlex({ justify: 'between' })])}
            data-testid="AddMangaToBookmarks-Button"
            isDisabled={isPending}
            color="secondary"
            theme="fill"
            max
        >
            {isPending ? (
                <Loader width={22} />
            ) : (
                <>
                    {data?.bookmark ? data.bookmark : '+ Добавить в закладки'}
                    <Icon className={cls.arrow} Svg={ArrowSvg} size={20} />
                </>
            )}
        </Button>
    );

    const handleSetBookmark = useCallback(
        (bookmark: BookmarksType) => {
            if (bookmark !== data?.bookmark) setBookmark(bookmark);
        },
        [data?.bookmark, setBookmark],
    );

    return (
        <Menu max button={button}>
            {data ? (
                bookmarks.map((mark) => (
                    <MenuItem
                        data-testid={`AddMangaToBookmarks-${mark.bookmark}`}
                        onAction={() => handleSetBookmark(mark.bookmark)}
                        className={cls.menuItem}
                        key={mark.bookmark}
                    >
                        {mark.bookmark}
                    </MenuItem>
                ))
            ) : (
                <MenuItem className={cls.notAuth} key={0} isDisabled>
                    Вы не авторизованы
                </MenuItem>
            )}
            {data?.bookmark && (
                <MenuItem onAction={deleteBookmark} className={cls.menuItem}>
                    Удалить закладку
                </MenuItem>
            )}
        </Menu>
    );
});
