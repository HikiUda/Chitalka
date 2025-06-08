/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckIcon, MinusIcon } from 'lucide-react';
import { createContext, ReactNode, useCallback, useContext } from 'react';
import { cn } from '@/shared/lib/css';

type TriSwitchState = 'include' | 'exclude' | 'indeterminate';

const getNextState = (current: TriSwitchState): TriSwitchState => {
    if (current === 'indeterminate') return 'include';
    if (current === 'include') return 'exclude';
    return 'indeterminate';
};

interface FilterCheckboxGroupContextProps {
    include: any[];
    exclude: any[];
    onCheck: (value: any, nextState: TriSwitchState) => void;
}

const FilterCheckboxGroupContext = createContext<FilterCheckboxGroupContextProps | null>(null);

function useFilterCheckboxGroupContext() {
    const context = useContext(FilterCheckboxGroupContext);
    if (!context) throw new Error('useFilterCheckboxGroupContext have been provided');
    return context;
}

interface FilterCheckboxProps {
    className?: string;
    label?: string;
    value: string | number;
}

const FilterCheckbox = (props: FilterCheckboxProps) => {
    const { className, value, label } = props;
    const { include, exclude, onCheck } = useFilterCheckboxGroupContext();

    const state: TriSwitchState = include.includes(value)
        ? 'include'
        : exclude.includes(value)
          ? 'exclude'
          : 'indeterminate';

    const handleClick = () => {
        onCheck(value, getNextState(state));
    };

    return (
        <div className="flex items-center gap-2">
            <button
                data-slot="checkbox"
                data-state={state}
                onClick={handleClick}
                className={cn(
                    'peer border-input dark:bg-input/30  focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                    'data-[state=include]:bg-primary data-[state=include]:text-primary-foreground data-[state=include]:border-primary',
                    'data-[state=exclude]:bg-primary data-[state=exclude]:text-primary-foreground data-[state=exclude]:border-primary',
                    className,
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

interface TriStateCheckboxGroupProps<T extends string | number> {
    include: T[];
    exclude: T[];
    onChangeInclude: (include: T[]) => void;
    onChangeExclude: (exclude: T[]) => void;
    children: ReactNode;
}

const FilterCheckboxGroup = <T extends string | number>(props: TriStateCheckboxGroupProps<T>) => {
    const { include, exclude, onChangeInclude, onChangeExclude, children } = props;

    const onCheck = useCallback(
        (value: T, nextState: TriSwitchState) => {
            switch (nextState) {
                case 'include':
                    onChangeInclude?.(include.concat(value));
                    return;
                case 'exclude':
                    onChangeInclude(include.filter((v) => v !== value));
                    onChangeExclude(exclude.concat(value));
                    return;
                default:
                    onChangeExclude(exclude.filter((v) => v !== value));
                    return;
            }
        },
        [exclude, include, onChangeExclude, onChangeInclude],
    );

    return (
        <FilterCheckboxGroupContext.Provider
            value={{
                include: include,
                exclude: exclude,
                onCheck,
            }}
        >
            {children}
        </FilterCheckboxGroupContext.Provider>
    );
};

export { FilterCheckbox, FilterCheckboxGroup };
