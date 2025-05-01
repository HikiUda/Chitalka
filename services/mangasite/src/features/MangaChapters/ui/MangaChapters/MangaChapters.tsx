import { FC, useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MangaIdType } from '@packages/model/src/entities/manga';
import EyeOffSvg from '@packages/ui/src/assets/icon/common/eyeOff.svg';
import EyeSvg from '@packages/ui/src/assets/icon/common/eye.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Input } from '@packages/ui/src/shared/Input';
import { OrderType } from '@packages/model/src/types/order';
import { useDebounce } from '@packages/model/src/lib/hooks/useDebounce/useDebounce';
import { useClearInfinityPages } from '@packages/model/src/lib/hooks/useClearInfinityPages';
import { Divider } from '@packages/ui/src/shared/Divider';
import { ChapterListApi } from '../../model/api/chapterListApi/chapterListApi';
import cls from './MangaChapters.module.scss';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { SelectOrder } from '@/entities/SelectOrder';

interface MangaChaptersProps {
    className?: string;
    mangaId: MangaIdType;
}

const MangaChapters: FC<MangaChaptersProps> = (props) => {
    const { className, mangaId } = props;
    const [order, setOrder] = useState<OrderType>('desc');
    const [search, setSearch] = useState('');

    const { data, fetchNextPage, refetch, isFetchingNextPage, isFetching } = useInfiniteQuery(
        ChapterListApi.getInfinityQueryOptions(mangaId, 30, search, order),
    );

    const clearPages = useClearInfinityPages(
        ChapterListApi.getInfinityQueryOptions(mangaId, 30, search, order).queryKey,
    );

    useEffect(() => {
        return () => {
            clearPages();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goSearch = useDebounce(() => {
        clearPages();
        refetch();
    }, 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            goSearch();
        },
        [goSearch],
    );
    const handleSetOrder = useCallback(
        (value: OrderType) => {
            setOrder(value);
            goSearch();
        },
        [goSearch],
    );

    return (
        <div className={className}>
            <HStack wrap="wrap" className={cls.navMenu} justify="between">
                <SelectOrder value={order} onChange={handleSetOrder} />
                <Input
                    border="primaryBorder"
                    placeholder="Найти главу"
                    value={search}
                    onChange={handleSetSearch}
                />
            </HStack>
            <Divider />
            <ChapterList
                chapters={data || []}
                renderChapter={(chapter) => (
                    <ChapterListItem
                        key={chapter.id}
                        before={
                            <Icon
                                Svg={chapter.isUserViewed ? EyeSvg : EyeOffSvg}
                                width={15}
                                height={15}
                            />
                        }
                        mangaId={mangaId}
                        chapter={chapter}
                    />
                )}
                isLoading={isFetching || isFetchingNextPage}
                skeletonsCount={30}
                fetchNextPage={fetchNextPage}
            />
        </div>
    );
};
export default MangaChapters;
