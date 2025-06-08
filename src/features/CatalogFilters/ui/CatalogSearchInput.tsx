import { SearchIcon, XIcon } from 'lucide-react';
import { useCatalogFiltersStore } from '../model/store/catalogFiltersStore';
import { cn } from '@/shared/lib/css';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';

interface CatalogSearchInputProps {
    className?: string;
}

export const CatalogSearchInput = (props: CatalogSearchInputProps) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();

    const search = useCatalogFiltersStore.use.search();
    const setSeacrh = useCatalogFiltersStore.use.setSearch();

    const handleSetSearch = (q: string) => {
        setSeacrh(q);
        setSearchParam('search', q);
    };

    return (
        <div className={cn('relative', className)}>
            <SearchIcon size={18} className="absolute left-4 top-[50%] translate-[-50%]" />
            <Input
                value={search}
                onChangeValue={handleSetSearch}
                placeholder="Поиск"
                className="px-8"
            />
            <Button
                variant="clear"
                size="clear"
                disabled={!search}
                onClick={() => handleSetSearch('')}
                className="absolute right-0 top-[50%] translate-[-50%]"
            >
                <XIcon size={18} />
            </Button>
        </div>
    );
};
