import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/css';

const headingVariants = cva('font-[Montserrat,sans-serif]', {
    variants: {
        variant: {
            h1: 'text-3xl',
            h2: 'text-2xl',
            h3: 'text-xl',
            h4: 'text-base',
            h5: 'text-sm',
        },
        weigth: {
            normal: 'font-normal',
            semibold: 'font-semibold',
        },
        italic: {
            false: null,
            true: 'italic',
        },
        color: {
            plain: 'text-foreground',
            primary: 'text-primary',
            secondary: 'text-secondary',
        },
    },
    defaultVariants: {
        variant: 'h4',
        weigth: 'normal',
        italic: false,
        color: 'plain',
    },
});

function Heading({
    className,
    variant,
    italic,
    weigth,
    color,
    asChild = false,
    ...props
}: React.ComponentProps<'h1'> &
    VariantProps<typeof headingVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : variant ? variant : 'h4';

    return (
        <Comp
            data-slot={Comp}
            className={cn(headingVariants({ variant, weigth, italic, color, className }))}
            {...props}
        />
    );
}

export { Heading, headingVariants };
