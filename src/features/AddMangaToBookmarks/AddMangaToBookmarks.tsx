import { FC } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { useGetBookmark } from './useGetBookmark';
import { useSetBookmark } from './useSetBookmark';
import { useDeleteBookmark } from './useDeleteBookmark';
import { Bookmarks, MangaIdType } from '@/shared/kernel/manga';
import { Button } from '@/shared/ui/kit/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu';
import { cn } from '@/shared/lib/css';
import { useSession } from '@/shared/api/session';

interface AddMangaToBookmarksProps {
    className?: string;
    mangaId: MangaIdType;
}

export const AddMangaToBookmarks: FC<AddMangaToBookmarksProps> = (props) => {
    const { className, mangaId } = props;

    const { data, isLoading } = useGetBookmark(mangaId);
    const { setBookmark, getOptimisticBookmark } = useSetBookmark(mangaId);
    const { deleteBookmark, isDeletePending } = useDeleteBookmark(mangaId);
    const { isUserAuth } = useSession();
    //TODO link to login and register page
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    disabled={isUserAuth && isLoading}
                    variant="secondary"
                    className={cn('flex justify-between items-center', className)}
                >
                    {getOptimisticBookmark(data?.bookmark, isDeletePending) ||
                        '+ Добавить в закладки'}
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
                {!isUserAuth && (
                    <DropdownMenuLabel className="text-center py-4 px-1">
                        Сначала необходимо войти или зарегестрироваться
                    </DropdownMenuLabel>
                )}
                {isUserAuth &&
                    Object.values(Bookmarks).map((bookmark) => (
                        <DropdownMenuItem key={bookmark} onClick={() => setBookmark(bookmark)}>
                            {bookmark}
                        </DropdownMenuItem>
                    ))}
                {data?.bookmark && (
                    <DropdownMenuItem variant="destructive" onClick={deleteBookmark}>
                        Удалить из закладок
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
