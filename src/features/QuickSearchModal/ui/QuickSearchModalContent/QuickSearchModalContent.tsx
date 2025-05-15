import { FC, useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MangaSearchList } from '../MangaSearchList/MangaSearchList';
import { ResentSearch } from '../ResentSearch/ResentSearch';
import { QuickSearchApi } from '../../model/api/quickSearch';
import cls from './QuickSearchModalContent.module.scss';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Icon } from '@/shared/deprecate-ui/Icon';
import { Input } from '@/shared/deprecate-ui/Input';
import SearchSvg from '@/shared/assets/icon/common/search.svg?react';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

const QuickSearchModalContent: FC = () => {
    const [search, setSearch] = useState('');
    const {
        data = [],
        refetch,
        isFetching,
    } = useQuery(QuickSearchApi.quickSearchQueryOptions(search));

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
            <MangaSearchList mangaList={data} isLoading={isFetching} />
        </>
    );
};
export default QuickSearchModalContent;
