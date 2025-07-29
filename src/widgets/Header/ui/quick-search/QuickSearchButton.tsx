import { SearchIcon } from 'lucide-react';
import { Button } from '@/shared/ui/kit/button';

export const QuickSearchButton = (props: { className?: string }) => {
    return (
        <Button
            {...props}
            variant="clear"
            className="w-full bg-white justify-start mt-2 text-black"
        >
            <SearchIcon size={20} /> Быстрый поиск
        </Button>
    );
};
