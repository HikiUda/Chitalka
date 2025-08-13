import { useEffect, useState } from 'react';
import { EventEmitter } from '@/shared/lib/eventEmitter';

type ReplycommentEvent = {
    'reply:comment': number | null;
};

const replyCommentEmitter = new EventEmitter<ReplycommentEvent>();

export function useMangaReplyComment() {
    const [replyCommentId, setReplyCommentId] = useState<number | null>(null);

    useEffect(() => {
        const unsub = replyCommentEmitter.on('reply:comment', (commentId) => {
            setReplyCommentId(commentId);
        });

        return () => {
            unsub();
        };
    }, []);

    const onReply = (commentId: number | null) => {
        replyCommentEmitter.emit('reply:comment', commentId);
    };

    return { replyCommentId, onReply };
}
