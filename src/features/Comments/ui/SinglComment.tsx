import { formatDistanceToNow } from 'date-fns';
import { ReactNode } from 'react';
import { enUS, ru } from 'date-fns/locale';
import { ApiSchemas } from '@/shared/api/instance';
import { cn } from '@/shared/lib/css';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Button } from '@/shared/ui/kit/button';
import { useAppLang } from '@/shared/kernel/i18n';
import { Loader } from '@/shared/ui/kit/loader';

export type SinglCommentProps = {
    className?: string;
    comment: ApiSchemas['Comment'];
    user: ApiSchemas['CommentUser'] | null;
    replies: ReactNode;
    isExpanded: boolean;
    onToggleExpanded: (commentId: number) => void;
    isRepliesFetching: boolean;
    replyForm: ReactNode;
    isReplyNow: boolean;
    onReply: (commentId: number | null) => void;
};

export const SinglComment = (props: SinglCommentProps) => {
    const {
        className,
        comment,
        user,
        replies,
        isExpanded,
        onToggleExpanded,
        isRepliesFetching,
        replyForm,
        isReplyNow,
        onReply,
    } = props;
    const { lang } = useAppLang();

    return (
        <div className={cn('flex flex-col gap-2 bg-secondary', className)}>
            <div className="flex items-center gap-2 ">
                <AppAdaptiveImage img={user?.avatar} className="w-8 h-8" />
                <span>{user?.name || '######'}</span>
                <span className="text-sm">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                        locale: lang === 'ru' ? ru : enUS,
                        addSuffix: true,
                    })}
                </span>
            </div>

            <p>{comment.content}</p>
            <div className="flex  items-center gap-3">
                <Button
                    variant="clear"
                    size="clear"
                    className="text-primary hover:scale-95 transition-transform"
                    onClick={() => onReply(comment.id)}
                >
                    Reply
                </Button>
                {comment.hasChildrens && (
                    <Button
                        variant="clear"
                        size="clear"
                        className="text-primary hover:scale-95 transition-transform"
                        onClick={() => onToggleExpanded(comment.id)}
                    >
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </Button>
                )}
            </div>
            {isReplyNow && replyForm}
            {isRepliesFetching && <Loader className="mx-auto" />}
            {isExpanded && <div className="border-l-2 border-accent pl-3">{replies}</div>}
        </div>
    );
};
