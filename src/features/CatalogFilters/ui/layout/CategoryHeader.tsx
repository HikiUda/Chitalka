import { MoveLeftIcon } from 'lucide-react';
import { memo } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { Heading } from '@/shared/ui/kit/heading';
import { cn } from '@/shared/lib/css';

interface CategoryHeaderProps {
    className?: string;
    title: string;
    onReset: () => void;
    onBack: () => void;
}

export const CategoryHeader = memo((props: CategoryHeaderProps) => {
    const { className, title, onBack, onReset } = props;
    return (
        <div className={cn('flex items-center justify-between gap-2 mb-2', className)}>
            <Button
                onClick={onBack}
                className="flex items-center gap-1"
                variant="clear"
                size="clear"
            >
                <MoveLeftIcon className="stroke-primary" />
                <Heading color="primary" asChild>
                    <span>{title}</span>
                </Heading>
            </Button>
            <Button
                onClick={onReset}
                variant="clear"
                size="clear"
                className="hover:opacity-80 transition-opacity"
            >
                Сбросить
            </Button>
        </div>
    );
});
CategoryHeader.displayName = 'CategoryHeader';
