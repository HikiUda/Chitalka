import { FunnelIcon, MoveLeftIcon } from 'lucide-react';
import { MangaCatalogFilters } from './MangaCatalogFilters';
import { Button, ButtonContext } from '@/shared/ui/kit/button';
import { Sheet, SheetBody, SheetClose, SheetTrigger } from '@/shared/ui/kit/sheet';
import { Heading } from '@/shared/ui/kit/heading';
import { useState } from 'react';

interface MangaCatalogFiltersSheetProps {
    className?: string;
}

export const MangaCatalogFiltersSheet = (props: MangaCatalogFiltersSheetProps) => {
    const { className } = props;
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className={className} variant="outline" size="sm">
                    <FunnelIcon /> Фильтры
                </Button>
            </SheetTrigger>
            <SheetBody>
                <SheetClose className="flex items-center gap-1 px-4 pt-4 -mb-4">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <span>Фильтры</span>
                    </Heading>
                </SheetClose>
                <ButtonContext.Provider value={{ slots: { close: {} } }}>
                    <MangaCatalogFilters />
                </ButtonContext.Provider>
            </SheetBody>
        </Sheet>
    );
};
