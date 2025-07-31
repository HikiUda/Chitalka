import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';
import { createI18nModule } from '@/shared/kernel/i18n';

export type CategoryCollapsedListItem = {
    title: string | number;
    link: string;
    specialSimbol?: string;
};

type CategoryCollapsedListProps = {
    className?: string;
    visibleCount?: number;
    categories: CategoryCollapsedListItem[];
};

const { useI18n } = createI18nModule({
    more: { ru: '+еще', en: '+more' },
    collapse: { ru: '...свернуть', en: '...collapse' },
});

export const CategoryCollapsedList = (props: CategoryCollapsedListProps) => {
    const { className, visibleCount = 3, categories } = props;
    const [close, setClose] = useState(true);
    const t = useI18n();

    if (!categories.length) return null;

    return (
        <div className={cn('flex gap-2 flex-wrap justify-start', className)}>
            {categories.map((category, ind) => {
                if (close && ind >= visibleCount) return null;
                return (
                    <Button variant="secondary" size="sm" key={ind} asChild>
                        <Link to={category.link}>
                            {category.specialSimbol}
                            {category.title}
                        </Link>
                    </Button>
                );
            })}
            {categories.length > visibleCount &&
                (close ? (
                    <Button size="sm" onClick={() => setClose(false)}>
                        {t('more')} {categories.length - visibleCount}
                    </Button>
                ) : (
                    <Button size="sm" onClick={() => setClose(true)}>
                        {t('collapse')}
                    </Button>
                ))}
        </div>
    );
};
