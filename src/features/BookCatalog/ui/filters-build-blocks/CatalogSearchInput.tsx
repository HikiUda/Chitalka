import { SearchIcon, XIcon } from 'lucide-react';
import { cn } from '@/shared/lib/css';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { createI18nModule } from '@/shared/kernel/i18n';

type CatalogSearchInputProps = {
    className?: string;
    search: string;
    setSearch: (search: string) => void;
};

const { useI18n } = createI18nModule({
    search: { ru: 'Поиск', en: 'Search' },
});

export const CatalogSearchInput = (props: CatalogSearchInputProps) => {
    const { className, search, setSearch } = props;
    const t = useI18n();

    return (
        <div className={cn('relative', className)}>
            <SearchIcon size={18} className="absolute left-4 top-[50%] translate-[-50%]" />
            <Input
                value={search}
                onChangeValue={setSearch}
                placeholder={t('search')}
                className="px-8"
            />
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
