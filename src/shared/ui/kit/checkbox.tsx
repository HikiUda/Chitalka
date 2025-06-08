/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/lib/css';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                data-slot="checkbox-indicator"
                className="flex items-center justify-center text-current transition-none"
            >
                <CheckIcon className="size-3.5" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

type CheckboxGroupContextType = {
    values: any[];
    onCheck: (value: any) => void;
};

const CheckboxGroupContext = React.createContext<CheckboxGroupContextType | null>(null);

function useCheckboxGroupContext() {
    const context = React.useContext(CheckboxGroupContext);
    if (!context) throw new Error('CheckboxGroupContext is required');
    return context;
}

const CheckboxGroupItem = ({
    value,
    label,
    className,
}: {
    label?: string | number;
    value: string | number;
    className?: string;
}) => {
    const { values, onCheck } = useCheckboxGroupContext();

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Checkbox checked={values.includes(value)} onCheckedChange={() => onCheck(value)} />
            {label}
        </div>
    );
};

const CheckboxGroup = <T extends string | number>({
    values,
    onValuesChange,
    children,
}: {
    values: T[];
    onValuesChange: (values: T[]) => void;
    children: React.ReactNode;
}) => {
    const onCheck = React.useCallback(
        (value: T) => {
            if (values.includes(value)) {
                onValuesChange(values.filter((v) => v !== value));
            } else {
                onValuesChange(values.concat(value));
            }
        },
        [onValuesChange, values],
    );

    return (
        <CheckboxGroupContext.Provider value={{ values, onCheck }}>
            {children}
        </CheckboxGroupContext.Provider>
    );
};

export { Checkbox, CheckboxGroup, CheckboxGroupItem };
