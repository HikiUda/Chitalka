import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/css';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={cn(
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
                className,
            )}
            {...props}
        />
    );
}

export const dialogContentVariants = cva(
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200 fixed z-50',
    {
        variants: {
            empty: {
                true: '',
                false: 'bg-background grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border p-6 shadow-lg  sm:max-w-lg',
            },
            horizonPosition: {
                left: 'left-[2%]',
                center: 'left-[50%] translate-x-[-50%]',
                right: 'right-[2%]',
            },
            verticalPosition: {
                top: 'top-[2%]',
                center: 'top-[50%] translate-y-[-50%]',
                bottom: 'bottom-[2%]',
            },
        },
        defaultVariants: {
            empty: false,
            horizonPosition: 'center',
            verticalPosition: 'center',
        },
    },
);

function DialogContent({
    className,
    children,
    empty,
    horizonPosition,
    verticalPosition,

    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants>) {
    return (
        <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(
                dialogContentVariants({ empty, horizonPosition, verticalPosition }),
                className,
            )}
            {...props}
        >
            {children}
            {!empty && (
                <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer">
                    <XIcon />
                    <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
            )}
        </DialogPrimitive.Content>
    );
}

function DialogBody({
    asChild,
    children,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants> & { asChild?: boolean }) {
    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay />
            {asChild ? children : <DialogContent {...props}>{children}</DialogContent>}
        </DialogPortal>
    );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="dialog-header"
            className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
            {...props}
        />
    );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
            {...props}
        />
    );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn('text-lg leading-none font-semibold', className)}
            {...props}
        />
    );
}

function DialogDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

export {
    Dialog,
    DialogClose,
    DialogBody,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
};
