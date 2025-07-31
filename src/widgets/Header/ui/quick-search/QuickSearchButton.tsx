import { SearchIcon } from 'lucide-react';
import { Button } from '@/shared/ui/kit/button';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({
    quickSearch: { ru: 'Быстрый поиск', en: 'Quick Search' },
});

export const QuickSearchButton = (props: { className?: string }) => {
    const t = useI18n();
    return (
        <Button
            {...props}
            variant="clear"
            className="w-full bg-white justify-start mt-2 text-black"
        >
            <SearchIcon size={20} /> {t('quickSearch')}
        </Button>
    );
};
