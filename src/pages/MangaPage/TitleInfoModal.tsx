import { InfoIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { OtherTitlesType, TitlesType } from './model/useMangaTitles';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';
import { ScopeCopyItems } from '@/entities/ScopeItems';

type TitleInfoModalProps = {
    titles: TitlesType;
    otherTitles: OtherTitlesType;
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
                <DialogContent>
                    {titles.map((title, ind) => (
                        <ScopeCopyItems key={ind} title={title.title} items={title.content} />
                    ))}
                    {otherTitles.titles.length && (
                        <ScopeCopyItems title={otherTitles.title} items={otherTitles.titles} />
                    )}
                </DialogContent>
            </Dialog>
            {children}
        </div>
    );
};
