import { MoveRightIcon } from 'lucide-react';
import { memo } from 'react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

interface CommonHeaderProps {
    className?: string;
    toGenres: () => void;
    toTags: () => void;
}

export const CommonHeader = memo((props: CommonHeaderProps) => {
    const { className, toGenres, toTags } = props;
    return (
        <div className={cn('px-2 py-2', className)}>
            <div
                role="button"
                onClick={toGenres}
                className={cn(
                    'flex items-center justify-between gap-2 cursor-pointer hover:bg-accent transition-colors p-2 ',
                    className,
                )}
            >
                <Heading color="primary">Жанры</Heading>
                <MoveRightIcon className="stroke-primary" />
            </div>
            <div
                role="button"
                onClick={toTags}
                className={cn(
                    'flex items-center justify-between gap-2 cursor-pointer hover:bg-accent transition-colors p-2 ',
                    className,
                )}
            >
                <Heading color="primary">Теги</Heading>
                <MoveRightIcon className="stroke-primary" />
            </div>
        </div>
    );
});
CommonHeader.displayName = 'CommonHeader';
