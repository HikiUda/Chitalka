import { EyeIcon, EyeOffIcon, MoveLeftIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { useGetMangaChapters } from '../../model/useGetMangaChapters';
import { BookChaptersLayout } from '../layout/BookChaptersLayout';
import { MangaIdType } from '@/shared/kernel/manga';
import { Heading } from '@/shared/ui/kit/heading';
import { Sheet, SheetBody, SheetClose, SheetTitle, SheetTrigger } from '@/shared/ui/kit/sheet';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { Input } from '@/shared/ui/kit/input';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
//TODO lazy import body
interface MangaChaptersSheetProps {
    trigger: ReactNode;
    mangaId: MangaIdType;
}

export const MangaChaptersSheet = (props: MangaChaptersSheetProps) => {
    const { trigger, mangaId } = props;
    const [open, setOpen] = useState(false);
    const { data = [], fetchNextPage, isFetching, order, search } = useGetMangaChapters(mangaId);

    const trottleFetchNextPage = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNextPage();
    });
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetBody>
                <SheetClose className="flex items-center gap-1 px-2.5 pt-2 cursor-pointer">
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <SheetTitle>Главы</SheetTitle>
                    </Heading>
                </SheetClose>
                <BookChaptersLayout
                    order={<ToggleOrder {...order} />}
                    search={<Input className="max-w-80" placeholder="Найти главу" {...search} />}
                    list={
                        <ChapterList
                            chapters={data}
                            renderChapter={(chapter) => (
                                <ChapterListItem
                                    key={chapter.id}
                                    before={
                                        chapter.isUserViewed ? (
                                            <EyeIcon size={15} />
                                        ) : (
                                            <EyeOffIcon size={15} />
                                        )
                                    }
                                    mangaId={mangaId}
                                    chapter={chapter}
                                    onClick={() => setOpen(false)}
                                />
                            )}
                            isLoading={isFetching}
                            skeletonsCount={30}
                            action={<div className="h-1" ref={intersect} />}
                        />
                    }
                />
            </SheetBody>
        </Sheet>
    );
};
