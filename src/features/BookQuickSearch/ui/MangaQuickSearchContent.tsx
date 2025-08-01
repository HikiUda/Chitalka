import { useCallback, useState } from 'react';
import { BookmarkIcon, EyeIcon, HeartIcon, SearchIcon } from 'lucide-react';
import { useMangaQuickSearch } from '../model/useMangaQuickSearch';
import { useMangaQuickSearchGetLast } from '../model/useMangaQuickSearchGetLast';
import { useMangaQuickSearchDeleteLast } from '../model/useMangaQuickSearchDeleteLast';
import { useI18n } from '../model/i18n';
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

export const MangaQuickSearchContent = () => {
    const [search, setSearch] = useState('');
    const t = useI18n();

    const { data = [], refetch, isFetching } = useMangaQuickSearch(search);
    const last = useMangaQuickSearchGetLast();
    const { quickSearchDeleteLast, getIsLastDeletePending } = useMangaQuickSearchDeleteLast();

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
                    placeholder={t('quickSearch')}
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
                    <BookCardInline key={id} to={getRoute.MANGA(urlId)} title={title} img={cover}>
                        <span className="text-sm opacity-70">{t(`mangaType.${type}`)}</span>
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
