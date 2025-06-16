import { SearchIcon } from 'lucide-react';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { QuickSearch } from '@/features/QuickSearch';
import { Button } from '@/shared/ui/kit/button';

export const HeaderQuickSearch = () => {
    return (
        <HeaderLayout className="bg-secondary">
            <QuickSearch
                trigger={
                    <Button variant="clear" className="w-full bg-white justify-start mt-2">
                        <SearchIcon size={20} /> Быстрый поиск
                    </Button>
                }
            />
        </HeaderLayout>
    );
};
