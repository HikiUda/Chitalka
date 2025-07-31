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
import { createI18nModule } from '@/shared/kernel/i18n';

type BookmarkSelectorProps = {
    className?: string;
    bookmark: Bookmarks | null | undefined;
    setBookmark: (bookmark: Bookmarks) => void;
    deleteBookmark: () => void;
    isLoading: boolean;
};

const { useI18n } = createI18nModule({
    notAuth: {
        ru: 'Сначала необходимо войти или зарегистрироваться',
        en: 'You need to log in or sign up first',
    },
    deleteBookmark: {
        ru: 'Удалить из закладок',
        en: 'Remove from bookmarks',
    },
    addBookmark: {
        ru: '+ Добавить в закладки',
        en: '+ Add to bookmarks',
    },
});

export const BookmarkSelector = (props: BookmarkSelectorProps) => {
    const { className, bookmark, isLoading, setBookmark, deleteBookmark } = props;
    const t = useI18n();

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
                    {bookmark ? t(`bookmarks.${bookmark}`) : t('addBookmark')}
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
                {!isUserAuth && (
                    <DropdownMenuLabel className="text-center py-4 px-1">
                        {t('notAuth')}
                    </DropdownMenuLabel>
                )}
                {isUserAuth &&
                    Object.values(Bookmarks).map((bookmark) => (
                        <DropdownMenuItem key={bookmark} onClick={() => setBookmark(bookmark)}>
                            {t(`bookmarks.${bookmark}`)}
                        </DropdownMenuItem>
                    ))}
                {bookmark && (
                    <DropdownMenuItem variant="destructive" onClick={deleteBookmark}>
                        {t('deleteBookmark')}
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
