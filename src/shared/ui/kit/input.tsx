import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/css';

const inputVariants = cva(
    'px-3 py-1 text-base disabled:opacity-50 disabled:pointer-events-none selection:bg-primary selection:text-primary-foreground md:text-sm placeholder:text-muted-foreground w-full appearance-none  outline-none bg-transparent',
    {
        variants: {
            variant: {
                default: cn(
                    'file:text-foreground  dark:bg-input/30 border-input flex h-9 min-w-0 rounded-md border shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed ',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                ),
                clear: 'border-none',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function Input({
    className,
    type,
    onChangeValue,
    onChange,
    variant,
    ...props
}: React.ComponentProps<'input'> & { onChangeValue?: (value: string) => void } & VariantProps<
        typeof inputVariants
    >) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        onChangeValue?.(e.target.value);
    };
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(inputVariants({ variant }), className)}
            onChange={onChangeHandler}
            {...props}
        />
    );
}

export { Input };
