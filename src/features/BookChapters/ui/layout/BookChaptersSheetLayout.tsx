import { MoveLeftIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Heading } from '@/shared/ui/kit/heading';
import { Sheet, SheetBody, SheetClose, SheetTitle, SheetTrigger } from '@/shared/ui/kit/sheet';

type BookChaptersSheetLayoutProps = {
    trigger: ReactNode;
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const BookChaptersSheetLayout = (props: BookChaptersSheetLayoutProps) => {
    const { trigger, children, open, onOpenChange } = props;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetBody>
                <SheetClose className="flex items-center gap-1 px-2.5 pt-3 cursor-pointer">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <SheetTitle>Главы</SheetTitle>
                    </Heading>
                </SheetClose>
                {children}
            </SheetBody>
        </Sheet>
    );
};
