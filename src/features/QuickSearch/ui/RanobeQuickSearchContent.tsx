import { useCallback, useState } from 'react';
import { BookmarkIcon, EyeIcon, HeartIcon, SearchIcon } from 'lucide-react';
import { useRanobeQuickSearch } from '../model/useRanobeQuickSearch';
import { useRanobeQuickSearchGetLast } from '../model/useRanobeQuickSearchGetLast';
import { useRanobeQuickSearchDeleteLast } from '../model/useRanobeQuickSearchDeleteLast';
import { LastSearchList } from './layout/LastSearchList';
import { QuickSearchList } from './layout/QuickSearchList';
import { LastSearchItem } from './layout/LastSearchItem';
import { Separator } from '@/shared/ui/kit/separator';
import { Input } from '@/shared/ui/kit/input';
import { BookCardInline } from '@/entities/BookList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Badge } from '@/shared/ui/kit/badge';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import { getRoute } from '@/shared/kernel/router';

export const RanobeQuickSearchContent = () => {
    const [search, setSearch] = useState('');

    const { data = [], refetch, isFetching } = useRanobeQuickSearch(search);
    const last = useRanobeQuickSearchGetLast();
    const { quickSearchDeleteLast, getIsLastDeletePending } = useRanobeQuickSearchDeleteLast();

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
            <LastSearchList
                className="mb-3"
                items={last.data || []}
                renderItem={(item) => (
                    <LastSearchItem
                        onSelectSearch={() => handleSetSearch(item)}
                        onDelete={() => quickSearchDeleteLast(item)}
                        disabled={getIsLastDeletePending(item)}
                        key={item}
                    >
                        {item}
                    </LastSearchItem>
                )}
            />
            <QuickSearchList
                list={data}
                renderItem={({ id, urlId, title, type, cover, views, likes, bookmarks }) => (
                    <BookCardInline key={id} to={getRoute.RANOBE(urlId)} title={title} img={cover}>
                        <span className="text-sm opacity-70">{type}</span>
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
