import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useIntersection } from '@packages/model/src/lib/hooks/useIntersection/useIntersection';
import { useTrottle } from '@packages/model/src/lib/hooks/useTrottle/useTrottle';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useInfiniteQuery } from '@tanstack/react-query';
import cls from './CatalogContent.module.scss';
import { CatalogApi, CatalogFiltersScheme } from '@/shared/api/mangaList';
import { CatalogCard } from '@/entities/MangaCard';
import {
    CatalogSearchInput,
    SortByOrderMenu,
    useGetCatalogFilters,
} from '@/features/CatalogFilters';

interface CatalogContentProps {
    className?: string;
}

export const CatalogContent: FC<CatalogContentProps> = (props) => {
    const { className } = props;
    const getFilters = useGetCatalogFilters();
    const { data, fetchNextPage } = useInfiniteQuery(
        CatalogApi.getMangaInfinityQueryOptions(CatalogFiltersScheme.parse(getFilters())),
    );
    //TODO optimization api query
    const trottleIntersect = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => trottleIntersect());

    if (!data) return null;
    return (
        <CardBlock className={classNames(cls.CatalogContent, {}, [className])}>
            <HStack className={cls.title} justify="between">
                <Heading color="primary" HeadingTag="h2">
                    Каталог
                </Heading>
                <SortByOrderMenu />
            </HStack>
            <CatalogSearchInput className={cls.input} />
            <div className={cls.grid}>
                {data.map((manga) => (
                    <CatalogCard key={manga.id} manga={manga} />
                ))}
            </div>
            <div ref={intersect} />
        </CardBlock>
    );
};
