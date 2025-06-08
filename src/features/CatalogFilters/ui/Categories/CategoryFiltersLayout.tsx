import { ReactNode } from 'react';
import { MoveLeftIcon } from 'lucide-react';
import { Separator } from '@/shared/ui/kit/separator';
import { Button } from '@/shared/ui/kit/button';
import { Heading } from '@/shared/ui/kit/heading';

interface CategoryFiltersLayoutProps {
    className?: string;
    categories: ReactNode;
    input: ReactNode;
    title: string;
    onReset: () => void;
    onBack: () => void;
}

export const CategoryFiltersLayout = (props: CategoryFiltersLayoutProps) => {
    const { className, categories, title, input, onReset, onBack } = props;
    return (
        <div className={className}>
            <div className="flex items-center justify-between gap-2 mb-2">
                <Button
                    onClick={onBack}
                    className="flex items-center gap-1"
                    variant="clear"
                    size="clear"
                >
                    <MoveLeftIcon className="stroke-primary" />
                    <Heading color="primary" asChild>
                        <span>{title}</span>
                    </Heading>
                </Button>
                <Button
                    onClick={onReset}
                    variant="clear"
                    size="clear"
                    className="hover:opacity-80 transition-opacity"
                >
                    Сбросить
                </Button>
            </div>
            <Separator />
            {input}
            <Separator className="mb-2" />
            {categories}
        </div>
    );
};
