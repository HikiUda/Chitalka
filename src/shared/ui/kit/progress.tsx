import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/css';

const progressVariants = cva('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', {
    variants: {
        variant: {
            primary: 'bg-primary/20',
            'chart-1': 'bg-chart-1/20',
            'chart-2': 'bg-chart-2/20',
            'chart-3': 'bg-chart-3/20',
            'chart-4': 'bg-chart-4/20',
            'chart-5': 'bg-chart-5/20',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

const indicatorVariants = cva('h-full w-full flex-1 transition-all', {
    variants: {
        variant: {
            primary: 'bg-primary',
            'chart-1': 'bg-chart-1',
            'chart-2': 'bg-chart-2',
            'chart-3': 'bg-chart-3',
            'chart-4': 'bg-chart-4',
            'chart-5': 'bg-chart-5',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

function Progress({
    className,
    value,
    variant,
    ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & VariantProps<typeof progressVariants>) {
    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn(progressVariants({ variant }), className)}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={indicatorVariants({ variant })}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
