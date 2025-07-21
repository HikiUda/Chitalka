import { HistoryIcon, XIcon } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type LastSearchItemProps = {
    className?: string;
    children: string;
    onSelectSearch: () => void;
    onDelete: () => void;
    disabled?: boolean;
};

export const LastSearchItem = (props: LastSearchItemProps) => {
    const { className, children, onSelectSearch, onDelete, disabled } = props;

    const handleOnDelete = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete();
        },
        [onDelete],
    );

    return (
        <div
            onClick={onSelectSearch}
            aria-disabled={disabled}
            className={cn(
                'grid grid-cols-[auto_1fr_auto] overflow-hidden px-4 py-2.5 items-center gap-2 hover:bg-accent aria-disabled:opacity-70 aria-disabled:pointer-events-none cursor-pointer',
                className,
            )}
        >
            <HistoryIcon size={15} />
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">{children}</p>
            <Button
                variant="clear"
                iconSize="auto"
                size="clear"
                disabled={disabled}
                onClick={handleOnDelete}
            >
                <XIcon size={20} />
            </Button>
        </div>
    );
};
