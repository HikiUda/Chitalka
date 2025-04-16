import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useIntersection } from '@packages/model/src/lib/hooks/useIntersection/useIntersection';
import { useTrottle } from '@packages/model/src/lib/hooks/useTrottle/useTrottle';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { Input } from '@packages/ui/src/shared/Input';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { useGetColumeCount } from '../../model/helpers/columeCount';
import cls from './CatalogContent.module.scss';
import { CatalogApi, CatalogFiltersScheme } from '@/shared/api/mangaList';
import { CatalogCard } from '@/entities/MangaCard';

interface CatalogContentProps {
    className?: string;
}

export const CatalogContent: FC<CatalogContentProps> = (props) => {
    const { className } = props;

    const { data, fetchNextPage } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(CatalogFiltersScheme.parse({})),
    );
    const columeCount = useGetColumeCount();
    const rowVirtualizer = useWindowVirtualizer({
        count: data?.length ? Math.ceil(data.length / columeCount) : 0,
        estimateSize: () => 290,
        overscan: 10,
    });
    const trottleIntersect = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => trottleIntersect());

    if (!data) return null;
    return (
        <CardBlock className={classNames(cls.CatalogContent, {}, [className])}>
            <HStack className={cls.title} justify="between">
                <Heading color="primary" HeadingTag="h2">
                    Каталог
                </Heading>
                <span>sort</span>
            </HStack>
            <Input className={cls.input} maxWidth border="primaryBorder" placeholder="Поиск" />

            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                    const key = Number(virtualItem.key);
                    return (
                        <div
                            key={virtualItem.key}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                //height: `${virtualItem.size}px`,
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                            className={cls.grid}
                        >
                            {data.slice(key * columeCount, (key + 1) * columeCount).map((manga) => (
                                <CatalogCard key={manga.id} manga={manga} />
                            ))}
                        </div>
                    );
                })}
            </div>
            <div ref={intersect} />
        </CardBlock>
    );
};
