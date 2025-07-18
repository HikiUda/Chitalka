import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';

type ContinueReadBookButtonProps = {
    className?: string;
    chapterLink: string | null;
    chapterCount: number;
    readedChapterCount: number;
};

export const ContinueReadBookButton = (props: ContinueReadBookButtonProps) => {
    const { className, chapterLink, chapterCount, readedChapterCount } = props;

    return (
        <Button
            disabled={!chapterLink}
            asChild
            className={cn(
                'flex justify-between items-center gap-1',
                !chapterLink && 'pointer-events-none aria-disabled:opacity-80',
                className,
            )}
        >
            <Link aria-disabled={!chapterLink} to={chapterLink || ''}>
                <span>{readedChapterCount ? 'Продолжить' : 'Начать читать'}</span>
                <span>
                    {readedChapterCount}/{chapterCount}
                </span>
            </Link>
        </Button>
    );
};
