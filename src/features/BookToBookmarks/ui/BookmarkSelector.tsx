import { ChevronDownIcon } from 'lucide-react';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Bookmarks } from '@/shared/kernel/book/bookmarks';
import { Button } from '@/shared/ui/kit/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/kit/dropdown-menu';
import { cn } from '@/shared/lib/css';
import { useSession } from '@/shared/kernel/session';

interface BookmarkSelectorProps {
    className?: string;
    bookmark: Bookmarks | null | undefined;
    setBookmark: (bookmark: Bookmarks) => void;
    deleteBookmark: () => void;
    isLoading: boolean;
}

export const BookmarkSelector = (props: BookmarkSelectorProps) => {
    const { className, bookmark, isLoading, setBookmark, deleteBookmark } = props;

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
                    {bookmark || '+ Добавить в закладки'}
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
                {bookmark && (
                    <DropdownMenuItem variant="destructive" onClick={deleteBookmark}>
                        Удалить из закладок
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
