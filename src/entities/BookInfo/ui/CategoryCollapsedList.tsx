import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

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

export const CategoryCollapsedList = (props: CategoryCollapsedListProps) => {
    const { className, visibleCount = 3, categories } = props;
    const [close, setClose] = useState(true);

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
                        +еще {categories.length - visibleCount}
                    </Button>
                ) : (
                    <Button size="sm" onClick={() => setClose(true)}>
                        ...свернуть
                    </Button>
                ))}
        </div>
    );
};
