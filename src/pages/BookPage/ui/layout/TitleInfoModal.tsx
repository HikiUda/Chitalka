import { InfoIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Separator } from '@/shared/ui/kit/separator';
import { BookMetaCopyItems } from '@/entities/BookInfo';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

type TitleInfoModalProps = {
    titles: { name: string; title: string }[];
    otherTitles: { name: string; titles: string[] };
    children: ReactNode;
};

export const TitleInfoModal = (props: TitleInfoModalProps) => {
    const { titles, otherTitles, children } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();
    if (isWidthLg) return children;
    //TODO lazy loading
    return (
        <div className="flex justify-center items-center gap-2 px-4 max-w-100">
            <Dialog>
                <DialogTrigger>
                    <InfoIcon />
                </DialogTrigger>
                <DialogContent verticalPosition="bottom">
                    {titles.map((title, ind) => (
                        <>
                            <BookMetaCopyItems key={ind} title={title.name} items={title.title} />
                            <Separator />
                        </>
                    ))}
                    {!!otherTitles.titles.length && (
                        <BookMetaCopyItems title={otherTitles.name} items={otherTitles.titles} />
                    )}
                </DialogContent>
            </Dialog>
            {children}
        </div>
    );
};
