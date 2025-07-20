import { memo } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type CommonFooterProps = {
    className?: string;
    onApply: () => void;
    onReset: () => void;
};

export const CommonFooter = memo((props: CommonFooterProps) => {
    const { onApply, onReset, className } = props;
    return (
        <div className={cn('flex gap-2 items-center justify-around', className)}>
            <Button onClick={onApply} className="basis-[45%]">
                Применить
            </Button>
            <Button variant="secondary" onClick={onReset} className="basis-[45%]">
                Сбросить
            </Button>
        </div>
    );
});
CommonFooter.displayName = 'CommonFooter';
