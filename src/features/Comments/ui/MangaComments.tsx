import { useMangaRootComments } from '../model/useMangaRootComments';
import { MangaRootComment } from './MangaRootComment';
import { BookId } from '@/shared/kernel/book/book';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';

type MangaCommentsProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaComments = (props: MangaCommentsProps) => {
    const { className, mangaId } = props;
    const { comments, getCommentUser, isFetching, fetchNextPage, hasNextPage } =
        useMangaRootComments(mangaId);

    return (
        <div className={cn('flex flex-col gap-3 overflow-auto', className)}>
            {comments.map((comment) => (
                <MangaRootComment
                    key={comment.id}
                    comment={comment}
                    user={getCommentUser(comment.userId)}
                    mangaId={mangaId}
                />
            ))}
            {isFetching && <Loader className="mx-auto" />}
            <Button
                disabled={!hasNextPage || isFetching}
                className="w-full"
                onClick={() => fetchNextPage()}
            >
                {hasNextPage ? 'Подгрузить еще' : 'Это все.'}
            </Button>
        </div>
    );
};
