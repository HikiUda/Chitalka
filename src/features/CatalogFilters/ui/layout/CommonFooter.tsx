import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';

interface CommonFooterProps {
    className?: string;
    onApply: () => void;
    onReset: () => void;
}

export const CommonFooter = (props: CommonFooterProps) => {
    const { className, onApply, onReset } = props;
    return (
        <div className={cn('flex gap-2 items-center justify-around ', className)}>
            <Button onClick={onApply} className="basis-[45%]">
                Применить
            </Button>
            <Button variant="secondary" onClick={onReset} className="basis-[45%]">
                Сбросить
            </Button>
        </div>
    );
};
