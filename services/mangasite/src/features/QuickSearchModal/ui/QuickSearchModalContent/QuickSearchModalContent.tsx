import { FC, useCallback } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Input } from '@packages/ui/src/shared/Input';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import { useDebounce } from '@packages/model/src/lib/hooks/useDebounce/useDebounce';
import { MangaSearchList } from '../MangaSearchList/MangaSearchList';
import { ResentSearch } from '../ResentSearch/ResentSearch';
import { useQuickSearchManga } from '../../model/api/useQuickSearchManga';
import { useSearchInputStore } from '../../model/store/SearchInput';
import cls from './QuickSearchModalContent.module.scss';

interface QuickSearchModalContentProps {
    className?: string;
}

const QuickSearchModalContent: FC<QuickSearchModalContentProps> = (props) => {
    const { className } = props;
    //const [search, setSearch] = useState('');
    const search = useSearchInputStore((state) => state.search);
    const setSearch = useSearchInputStore((state) => state.setSearch);
    //TODO Loading state
    const { data, refetch, isFetching } = useQuickSearchManga({ search });

    const goSearch = useDebounce(() => refetch(), 500);

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
                <Icon Svg={SearchSvg} width={20} height={20} />{' '}
                <Input
                    value={search}
                    onChange={handleSetSearch}
                    placeholder="Быстрый поиск"
                    maxWidth
                />
            </HStack>
            <ResentSearch className={cls.block} />
            <MangaSearchList mangaList={data ?? []} isLoading={isFetching} />
        </>
    );
};
export default QuickSearchModalContent;
