import { InfoIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { Dialog, DialogBody, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Separator } from '@/shared/ui/kit/separator';
import { BookMetaCopyItems } from '@/entities/BookInfo';

type TitleInfoModalProps = {
    titles: { name: string; title: string }[];
    otherTitles: { name: string; titles: string[] };
    children: ReactNode;
};

export const TitleInfoModal = (props: TitleInfoModalProps) => {
    const { titles, otherTitles, children } = props;
    if (!isMobile) return children;
    //TODO lazy loading
    return (
        <div className="flex justify-center items-center gap-2 px-4 max-w-100">
            <Dialog>
                <DialogTrigger>
                    <InfoIcon />
                </DialogTrigger>
                <DialogBody verticalPosition="bottom">
                    {titles.map((title, ind) => (
                        <>
                            <BookMetaCopyItems key={ind} title={title.name} items={title.title} />
                            <Separator />
                        </>
                    ))}
                    {!!otherTitles.titles.length && (
                        <BookMetaCopyItems title={otherTitles.name} items={otherTitles.titles} />
                    )}
                </DialogBody>
            </Dialog>
            {children}
        </div>
    );
};
