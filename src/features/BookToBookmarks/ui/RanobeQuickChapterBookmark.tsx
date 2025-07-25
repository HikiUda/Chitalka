import { useRanobeGetBookmark } from '../model/useRanobeGetBookmark';
import { useRanobeSetBookmark } from '../model/useRanobeSetBookmark';
import { QuickChapterBookmark } from './QuickChapterBookmark';
import { BookId } from '@/shared/kernel/book/book';

type RanobeQuickChapterBookmarkProps = {
    className?: string;
    ranobe: BookId;
    chapterId: number | null;
};

export const RanobeQuickChapterBookmark = (props: RanobeQuickChapterBookmarkProps) => {
    const { className, ranobe, chapterId } = props;

    const { data } = useRanobeGetBookmark(ranobe);
    const { setBookmark } = useRanobeSetBookmark(ranobe);

    return (
        <QuickChapterBookmark
            className={className}
            bookmarkChapterId={data?.chapterId || null}
            chapterId={chapterId}
            setBookmark={setBookmark}
        />
    );
};
