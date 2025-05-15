import { FC, useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ChapterListApi } from '../../model/api/chapterListApi/chapterListApi';
import cls from './MangaChapters.module.scss';
import { MangaIdType } from '@/shared/kernel/manga';
import EyeOffSvg from '@/shared/assets/icon/common/eyeOff.svg?react';
import EyeSvg from '@/shared/assets/icon/common/eye.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Input } from '@/shared/deprecate-ui/Input';
import { OrderType } from '@/shared/kernel/order';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';
import { Divider } from '@/shared/deprecate-ui/Divider';
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
