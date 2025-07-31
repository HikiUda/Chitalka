import { ListOrderedIcon, MoveLeftIcon } from 'lucide-react';
import { ReactNode, Suspense } from 'react';
import { Heading } from '@/shared/ui/kit/heading';
import { Sheet, SheetContent, SheetClose, SheetTitle, SheetTrigger } from '@/shared/ui/kit/sheet';
import { cn } from '@/shared/lib/css';
import { Loader } from '@/shared/ui/kit/loader';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookChaptersSheetLayoutProps = {
    className?: string;
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const { useI18n } = createI18nModule({
    chpater: { ru: 'Главы', en: 'Chapters' },
});

export const BookChaptersSheetLayout = (props: BookChaptersSheetLayoutProps) => {
    const { children, open, onOpenChange, className } = props;
    const t = useI18n();

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger className={cn('cursor-pointer', className)}>
                <ListOrderedIcon size={30} />
            </SheetTrigger>
            <SheetContent>
                <SheetClose className="flex items-center gap-1 px-2.5 pt-3 cursor-pointer">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <SheetTitle>{t('chpater')}</SheetTitle>
                    </Heading>
                </SheetClose>
                <Suspense fallback={<Loader variant="flower" className="mx-auto mt-4" />}>
                    {children}
                </Suspense>
            </SheetContent>
        </Sheet>
    );
};
