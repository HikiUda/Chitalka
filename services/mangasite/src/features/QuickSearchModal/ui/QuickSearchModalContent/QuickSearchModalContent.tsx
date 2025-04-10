import { FC, useCallback } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Input } from '@packages/ui/src/shared/Input';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import { useDebounce } from '@packages/model/src/lib/hooks/useDebounce/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { MangaSearchList } from '../MangaSearchList/MangaSearchList';
import { ResentSearch } from '../ResentSearch/ResentSearch';
import { useQuickSearchStore } from '../../model/slices/QuickSearchStore';
import cls from './QuickSearchModalContent.module.scss';
import { QuickSearch } from '@/shared/api/mangaList';

const QuickSearchModalContent: FC = () => {
    const search = useQuickSearchStore.use.search();
    const setSearch = useQuickSearchStore.use.setSearch();
    const { data, refetch, isFetching } = useQuery(QuickSearch.quickSearchQueryOptions(search));

    const goSearch = useDebounce(() => refetch(), 200);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            goSearch();
        },
        [goSearch, setSearch],
    );

    return (
        <>
            <HStack max align="center" className={cls.block}>
                <Icon Svg={SearchSvg} width={20} height={20} />
                <Input
                    value={search}
                    onChange={handleSetSearch}
                    placeholder="Быстрый поиск"
                    maxWidth
                />
            </HStack>
            <ResentSearch onSelectSearch={handleSetSearch} className={cls.block} />
            <MangaSearchList mangaList={data ?? []} isLoading={isFetching} />
        </>
    );
};
export default QuickSearchModalContent;
