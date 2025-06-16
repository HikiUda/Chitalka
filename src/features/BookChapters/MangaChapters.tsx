import { FC, useCallback, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useMangaChapters } from './useMangaChapters';
import { MangaIdType } from '@/shared/kernel/manga';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';

import { Input } from '@/shared/ui/kit/input';
import { Separator } from '@/shared/ui/kit/separator';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';

interface MangaChaptersProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaChapters: FC<MangaChaptersProps> = (props) => {
    const { className, mangaId } = props;
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');
    const [search, setSearch] = useState('');

    const {
        data = [],
        fetchNextPage,
        refetch,
        isFetching,
    } = useMangaChapters(mangaId, search, order);

    const trottleFetchNextPage = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNextPage();
    });

    const handleRefetch = useDebounce(refetch, 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            handleRefetch();
        },
        [handleRefetch],
    );

    const handleSetOrder = useCallback(
        (value: 'asc' | 'desc') => {
            setOrder(value);
            handleRefetch();
        },
        [handleRefetch],
    );

    return (
        <div className={className}>
            <div className="flex justify-between items-center flex-wrap px-2.5 mb-4">
                <ToggleOrder value={order} onChange={handleSetOrder} />
                <Input
                    className="max-w-80"
                    placeholder="Найти главу"
                    value={search}
                    onChangeValue={handleSetSearch}
                />
            </div>
            <Separator />
            <ChapterList
                chapters={data}
                renderChapter={(chapter) => (
                    <ChapterListItem
                        key={chapter.id}
                        before={
                            chapter.isUserViewed ? <EyeIcon size={15} /> : <EyeOffIcon size={15} />
                        }
                        mangaId={mangaId}
                        chapter={chapter}
                    />
                )}
                isLoading={isFetching}
                skeletonsCount={30}
                action={<div ref={intersect} />}
            />
        </div>
    );
};
