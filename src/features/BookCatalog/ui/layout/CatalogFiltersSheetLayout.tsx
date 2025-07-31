import { FunnelIcon, MoveLeftIcon } from 'lucide-react';
import { ReactNode, Suspense } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { Sheet, SheetContent, SheetClose, SheetTitle, SheetTrigger } from '@/shared/ui/kit/sheet';
import { Heading } from '@/shared/ui/kit/heading';
import { Loader } from '@/shared/ui/kit/loader';
import { Separator } from '@/shared/ui/kit/separator';
import { createI18nModule } from '@/shared/kernel/i18n';

type CatalogFiltersSheetLayoutProps = {
    className?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
};

const { useI18n } = createI18nModule({
    filters: { ru: 'Фильтры', en: 'Filters' },
});

export const CatalogFiltersSheetLayout = (props: CatalogFiltersSheetLayoutProps) => {
    const { className, open, onOpenChange, children } = props;
    const t = useI18n();
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button className={className} variant="outline" size="sm">
                    <FunnelIcon /> {t('filters')}
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card gap-0" aria-describedby={undefined}>
                <SheetClose className="flex items-center gap-1 px-4 pt-4 -mb-4">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <SheetTitle>{t('filters')}</SheetTitle>
                    </Heading>
                </SheetClose>
                <Separator className="mt-6" />
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    {children}
                </Suspense>
            </SheetContent>
        </Sheet>
    );
};
