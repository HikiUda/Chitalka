import { ReactNode, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Drawer, DrawerContent, DrawerTrigger } from '@/shared/ui/kit/drawer';
import { Loader } from '@/shared/ui/kit/loader';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type QuickSearchProps = {
    trigger: ReactNode;
    content: ReactNode;
};

export const QuickSearch = (props: QuickSearchProps) => {
    const { trigger, content } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    if (!isWidthLg)
        return (
            <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerContent className="gap-2 px-3 pb-5">
                    <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                        {content}
                    </Suspense>
                </DrawerContent>
            </Drawer>
        );

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent
                className="gap-2 py-3 px-4 sm:max-w-160"
                closeButton={false}
                verticalPosition="top"
            >
                <Suspense fallback={<Loader className="mx-auto" variant="flower" />}>
                    {content}
                </Suspense>
            </DialogContent>
        </Dialog>
    );
};
