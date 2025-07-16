import { useRanobeGetBookmark } from '../model/useRanobeGetBookmark';
import { useRanobeSetBookmark } from '../model/useRanobeSetBookmark';
import { QuickBookmark } from './QuickBookmark';
import { BookIdType } from '@/shared/kernel/book';

type RanobeQuickBookmarkProps = {
    className?: string;
    ranobe: BookIdType;
    chapterId: number | null;
};

export const RanobeQuickBookmark = (props: RanobeQuickBookmarkProps) => {
    const { className, ranobe, chapterId } = props;

    const { data } = useRanobeGetBookmark(ranobe);
    const { setBookmark } = useRanobeSetBookmark(ranobe);

    return (
        <QuickBookmark
            className={className}
            bookmarkChapterId={data?.chapterId || null}
            chapterId={chapterId}
            setBookmark={setBookmark}
        />
    );
};
