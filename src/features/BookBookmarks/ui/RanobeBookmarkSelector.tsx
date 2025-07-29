import { memo } from 'react';
import { useRanobeGetBookmark } from '../model/useRanobeGetBookmark';
import { useRanobeSetBookmark } from '../model/useRanobeSetBookmark';
import { useRanobeDeleteBookmark } from '../model/useRanobeDeleteBookmark';
import { BookmarkSelector } from './BookmarkSelector';
import { BookId } from '@/shared/kernel/book/book';

type RanobeBookmarkSelectorProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeBookmarkSelector = memo((props: RanobeBookmarkSelectorProps) => {
    const { className, ranobeId } = props;

    const { data, isLoading } = useRanobeGetBookmark(ranobeId);
    const { setBookmark, getOptimisticBookmark } = useRanobeSetBookmark(ranobeId);
    const { deleteBookmark, isDeletePending } = useRanobeDeleteBookmark(ranobeId);

    const bookmark = getOptimisticBookmark(data?.bookmark, isDeletePending);

    return (
        <BookmarkSelector
            className={className}
            bookmark={bookmark}
            isLoading={isLoading}
            setBookmark={setBookmark}
            deleteBookmark={deleteBookmark}
        />
    );
});
RanobeBookmarkSelector.displayName = 'RanobeBookmarkSelector';
