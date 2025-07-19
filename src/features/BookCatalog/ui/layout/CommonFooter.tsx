import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type CommonFooterProps = {
    className?: string;
    onApply: () => void;
    onReset: () => void;
};
// ? memo have no effect because Slot in CatalogFilterCardLayout
export const CommonFooter = (props: CommonFooterProps) => {
    const { onApply, onReset, className } = props;
    return (
        <div className={cn('flex gap-2 items-center justify-around', className)}>
            <Button slot="close" onClick={onApply} className="basis-[45%]">
                Применить
            </Button>
            <Button variant="secondary" onClick={onReset} className="basis-[45%]">
                Сбросить
            </Button>
        </div>
    );
};
