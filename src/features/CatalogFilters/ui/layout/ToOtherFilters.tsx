import { MoveRightIcon } from 'lucide-react';
import { memo } from 'react';
import { cn } from '@/shared/lib/css';
import { Heading } from '@/shared/ui/kit/heading';

interface ToOtherFiltersProps {
    className?: string;
    onClick: () => void;
    title: string;
}

export const ToOtherFilters = memo((props: ToOtherFiltersProps) => {
    const { className, onClick, title } = props;
    return (
        <div
            role="button"
            onClick={onClick}
            className={cn(
                'flex items-center justify-between gap-2 cursor-pointer hover:bg-accent transition-colors p-2 ',
                className,
            )}
        >
            <Heading color="primary">{title}</Heading>
            <MoveRightIcon className="stroke-primary" />
        </div>
    );
});
ToOtherFilters.displayName = 'ToOtherFilters';
