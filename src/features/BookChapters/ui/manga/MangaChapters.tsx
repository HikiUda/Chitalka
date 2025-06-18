import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useGetMangaChapters } from '../../model/useGetMangaChapters';
import { BookChaptersLayout } from '../layout/BookChaptersLayout';
import { MangaIdType } from '@/shared/kernel/book';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';

import { Input } from '@/shared/ui/kit/input';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';

type MangaChaptersProps = {
    className?: string;
    mangaId: MangaIdType;
};

export const MangaChapters = (props: MangaChaptersProps) => {
    const { className, mangaId } = props;

    const {
        chapters = [],
        fetchNextPage,
        isFetching,
        order,
        search,
    } = useGetMangaChapters(mangaId);

    const trottleFetchNextPage = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNextPage();
    });

    return (
        <BookChaptersLayout
            className={className}
            order={<ToggleOrder {...order} />}
            search={<Input className="max-w-80" placeholder="Найти главу" {...search} />}
            list={
                <ChapterList
                    chapters={chapters}
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
                        />
                    )}
                    isLoading={isFetching}
                    skeletonsCount={30}
                    action={<div ref={intersect} />}
                />
            }
        />
    );
};
