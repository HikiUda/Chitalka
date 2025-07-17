import { useRanobeGetBookmark } from '../model/useRanobeGetBookmark';
import { useRanobeSetBookmark } from '../model/useRanobeSetBookmark';
import { useRanobeDeleteBookmark } from '../model/useRanobeDeleteBookmark';
import { BookmarkSelector } from './BookmarkSelector';
import { BookIdType } from '@/shared/kernel/book/book';

type RanobeBookmarkSelectorProps = {
    className?: string;
    ranobeId: BookIdType;
};

export const RanobeBookmarkSelector = (props: RanobeBookmarkSelectorProps) => {
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
};
