import { InfoIcon } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { memo } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';
import { Separator } from '@/shared/ui/kit/separator';
import { BookMetaCopyItems } from '@/entities/BookInfo';

type TitleInfoProps = {
    titles: { name: string; title: string }[];
    otherTitles: { name: string; titles: string[] };
};

export const TitleInfo = memo((props: TitleInfoProps) => {
    const { titles, otherTitles } = props;

    return (
        <Dialog>
            <DialogTrigger>
                <InfoIcon />
            </DialogTrigger>
            <DialogContent verticalPosition="bottom">
                <DialogTitle hidden />
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
    );
});
TitleInfo.displayName = 'TitleInfo';
