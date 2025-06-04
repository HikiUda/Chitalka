import { FC, Suspense, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { SearchIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';
import { Dialog, DialogBody, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Drawer, DrawerBody, DrawerTrigger } from '@/shared/ui/kit/drawer';
import { Loader } from '@/shared/ui/kit/loader';

const QuickSearchContent = lazyNamed(() => import('./QuickSearchContent'), 'QuickSearchContent');

interface QuickSearchProps {
    className?: string;
}

export const QuickSearch: FC<QuickSearchProps> = (props) => {
    const { className } = props;

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const trigger = (
        <Button
            data-testid="QuickSearch-Button"
            variant="clear"
            size="sm"
            className={cn(
                isMobile
                    ? 'w-full bg-white justify-start'
                    : 'font-semibold hover:bg-primary/50 transition-colors duration-300',
                className,
            )}
        >
            <SearchIcon size={20} /> {isMobile ? 'Быстрый поиск' : 'Поиск'}
        </Button>
    );

    if (isMobile)
        return (
            <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerBody className="gap-2 px-3 pb-5">
                    <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                        <QuickSearchContent />
                    </Suspense>
                </DrawerBody>
            </Drawer>
        );

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogBody
                className="gap-2 py-3 px-4 sm:max-w-160"
                closeButton={false}
                verticalPosition="top"
            >
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    <QuickSearchContent />
                </Suspense>
            </DialogBody>
        </Dialog>
    );
};
