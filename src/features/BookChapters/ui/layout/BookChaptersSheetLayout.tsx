import { ListOrderedIcon, MoveLeftIcon } from 'lucide-react';
import { ReactNode, Suspense } from 'react';
import { Heading } from '@/shared/ui/kit/heading';
import { Sheet, SheetBody, SheetClose, SheetTitle, SheetTrigger } from '@/shared/ui/kit/sheet';
import { cn } from '@/shared/lib/css';
import { Loader } from '@/shared/ui/kit/loader';

type BookChaptersSheetLayoutProps = {
    className?: string;
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const BookChaptersSheetLayout = (props: BookChaptersSheetLayoutProps) => {
    const { children, open, onOpenChange, className } = props;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger className={cn('cursor-pointer', className)}>
                <ListOrderedIcon size={30} />
            </SheetTrigger>
            <SheetBody>
                <SheetClose className="flex items-center gap-1 px-2.5 pt-3 cursor-pointer">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <SheetTitle>Главы</SheetTitle>
                    </Heading>
                </SheetClose>
                <Suspense fallback={<Loader variant="flower" className="mx-auto mt-4" />}>
                    {children}
                </Suspense>
            </SheetBody>
        </Sheet>
    );
};
