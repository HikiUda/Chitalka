import { useLastQuickSearch } from '../model/useLastQuickSearch';
import { useDeleteLastQuickSearch } from '../model/useDeleteLastQuickSearch';
import { LastSearchItem } from './LastSearchItem';

interface LastSearchListProps {
    className?: string;
    onSelectSearch: (value: string) => void;
}

export const LastSearchList = (props: LastSearchListProps) => {
    const { className, onSelectSearch } = props;
    const { data = [], isLoading } = useLastQuickSearch();
    const { deleteLastSearch, getIsPending } = useDeleteLastQuickSearch();

    if (!data.length) return null;

    return (
        <div className={className}>
            {data.map((item) => (
                <LastSearchItem
                    onSelectSearch={() => onSelectSearch(item)}
                    onDelete={() => deleteLastSearch(item)}
                    disabled={getIsPending(item)}
                    key={item}
                >
                    {item}
                </LastSearchItem>
            ))}
        </div>
    );
};
