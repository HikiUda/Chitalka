import { MoveLeftIcon } from 'lucide-react';
import { memo, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Button } from '@/shared/ui/kit/button';
import { Heading } from '@/shared/ui/kit/heading';
import { cn } from '@/shared/lib/css';
import { Separator } from '@/shared/ui/kit/separator';

type CategoryHeaderProps = {
    className?: string;
    title: string;
    onReset: () => void;
    onBack: () => void;
    input: ReactNode;
};

export const CategoryHeader = memo((props: CategoryHeaderProps) => {
    const { className, title, onBack, onReset, input } = props;
    return (
        <div className="px-4 pt-4">
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
            <Separator />
            <Slot className="my-2">{input}</Slot>
            <Separator className="mb-2" />
        </div>
    );
});
CategoryHeader.displayName = 'CategoryHeader';
