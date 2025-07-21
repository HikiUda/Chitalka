import { useMangaQuickSearchGetLast } from '../model/useMangaQuickSearchGetLast';
import { useMangaQuickSearchDeleteLast } from '../model/useMangaQuickSearchDeleteLast';
import { LastSearchItem } from './LastSearchItem';

interface LastSearchListProps {
    className?: string;
    onSelectSearch: (value: string) => void;
}

export const LastSearchList = (props: LastSearchListProps) => {
    const { className, onSelectSearch } = props;
    const { data = [], isLoading } = useMangaQuickSearchGetLast();
    const { quickSearchDeleteLast, getIsPending } = useMangaQuickSearchDeleteLast();

    if (!data.length) return null;

    return (
        <div className={className}>
            {data.map((item) => (
                <LastSearchItem
                    onSelectSearch={() => onSelectSearch(item)}
                    onDelete={() => quickSearchDeleteLast(item)}
                    disabled={getIsPending(item)}
                    key={item}
                >
                    {item}
                </LastSearchItem>
            ))}
        </div>
    );
};
