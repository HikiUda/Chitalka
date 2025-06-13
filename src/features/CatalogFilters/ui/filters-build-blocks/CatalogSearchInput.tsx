import { SearchIcon, XIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';

interface CatalogSearchInputProps {
    className?: string;
    search: string;
    setSearch: (search: string) => void;
}

export const CatalogSearchInput = (props: CatalogSearchInputProps) => {
    const { className, search, setSearch } = props;

    return (
        <div className={cn('relative', className)}>
            <SearchIcon size={18} className="absolute left-4 top-[50%] translate-[-50%]" />
            <Input value={search} onChangeValue={setSearch} placeholder="Поиск" className="px-8" />
            <Button
                variant="clear"
                size="clear"
                disabled={!search}
                onClick={() => setSearch('')}
                className="absolute right-0 top-[50%] translate-[-50%]"
            >
                <XIcon size={18} />
            </Button>
        </div>
    );
};
