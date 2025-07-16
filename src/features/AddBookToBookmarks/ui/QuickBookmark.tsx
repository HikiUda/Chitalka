import { BookmarkIcon } from 'lucide-react';
import { Bookmarks } from '@/shared/kernel/book';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';

type QuickBookmarkProps = {
    className?: string;
    bookmarkChapterId: number | null;
    chapterId: number | null;
    setBookmark: (bookmark: Bookmarks, chapterId: number | null) => void;
};

export const QuickBookmark = (props: QuickBookmarkProps) => {
    const { className, bookmarkChapterId, setBookmark, chapterId } = props;

    const handleSetBookmark = () => {
        if (chapterId === bookmarkChapterId) return;
        setBookmark('Reading', chapterId);
    };

    return (
        <Button variant="clear" size="clear" className={className} onClick={handleSetBookmark}>
            <BookmarkIcon
                className={cn(chapterId === bookmarkChapterId && 'fill-primary stroke-primary')}
            />
        </Button>
    );
};
