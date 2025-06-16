import { ReactNode, Suspense, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Dialog, DialogBody, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Drawer, DrawerBody, DrawerTrigger } from '@/shared/ui/kit/drawer';
import { Loader } from '@/shared/ui/kit/loader';

const QuickSearchContent = lazyNamed(() => import('./QuickSearchContent'), 'QuickSearchContent');

interface QuickSearchProps {
    trigger: ReactNode;
}

export const QuickSearch = (props: QuickSearchProps) => {
    const { trigger } = props;

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

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
