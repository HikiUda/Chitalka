import { useCallback, useState } from 'react';
import { BookmarkIcon, EyeIcon, HeartIcon, SearchIcon } from 'lucide-react';
import { useQuickSearch } from '../model/useQuickSearch';
import { LastSearchList } from './LastSearchList';
import { QuickSearchList } from './QuickSearchList';
import { Separator } from '@/shared/ui/kit/separator';
import { Input } from '@/shared/ui/kit/input';
import { BookCardInline } from '@/entities/BookList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Badge } from '@/shared/ui/kit/badge';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import { getRoute } from '@/shared/kernel/router';

export const QuickSearchContent = () => {
    const [search, setSearch] = useState('');
    const { data = [], refetch, isFetching } = useQuickSearch(search);

    const goSearch = useDebounce(refetch, 200);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            goSearch();
        },
        [goSearch],
    );

    return (
        <div className="overflow-auto">
            <div className="flex justify-center items-center w-full mb-1">
                <SearchIcon size={18} />
                <Input
                    variant="clear"
                    value={search}
                    onChangeValue={handleSetSearch}
                    placeholder="Быстрый поиск"
                />
            </div>
            <Separator />
            <LastSearchList onSelectSearch={handleSetSearch} className="mb-3" />
            <QuickSearchList
                list={data}
                renderItem={({ id, urlId, title, type, cover, views, likes, bookmarks }) => (
                    <BookCardInline
                        key={id}
                        to={getRoute.MANGA(urlId)}
                        title={title}
                        subtitle={type}
                        img={cover}
                    >
                        <div className="flex gap-1 items-center">
                            <Badge variant="muted">
                                <EyeIcon /> {toShortcutNumber(views)}
                            </Badge>
                            <Badge variant="muted">
                                <HeartIcon /> {toShortcutNumber(likes)}
                            </Badge>
                            <Badge variant="muted">
                                <BookmarkIcon /> {toShortcutNumber(bookmarks)}
                            </Badge>
                        </div>
                    </BookCardInline>
                )}
                isLoading={isFetching}
            />
        </div>
    );
};
