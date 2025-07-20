import { CheckIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';

export type TriSwitchState = 'include' | 'exclude' | 'indeterminate';

const getNextState = (current: TriSwitchState): TriSwitchState => {
    if (current === 'indeterminate') return 'include';
    if (current === 'include') return 'exclude';
    return 'indeterminate';
};

type CategoryCheckboxProps<T extends string | number> = {
    className?: string;
    label: string;
    value: T;
    state: TriSwitchState;
    onChangeState: (value: T, nextState: TriSwitchState) => void;
};

export const CategoryCheckbox = <T extends string | number>(props: CategoryCheckboxProps<T>) => {
    const { className, value, label, state, onChangeState } = props;

    const handleOnCheck = () => {
        onChangeState(value, getNextState(state));
    };

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <button
                data-slot="category-checkbox"
                data-state={state}
                onClick={handleOnCheck}
                className={cn(
                    'peer border-input dark:bg-input/30  focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                    'data-[state=include]:bg-primary data-[state=include]:text-primary-foreground data-[state=include]:border-primary',
                    'data-[state=exclude]:bg-primary data-[state=exclude]:text-primary-foreground data-[state=exclude]:border-primary',
                    'cursor-pointer',
                )}
            >
                <span
                    data-slot="checkbox-indicator"
                    className="flex items-center justify-center text-current transition-none"
                >
                    {state === 'include' && <CheckIcon className="size-3.5" />}
                    {state === 'exclude' && <MinusIcon className="size-3.5" />}
                </span>
            </button>
            {label}
        </div>
    );
};
