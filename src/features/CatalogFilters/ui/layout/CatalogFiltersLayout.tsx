import { ReactNode, Suspense, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import cls from './catalog-filters.module.css';
import { cn } from '@/shared/lib/css';
import { Loader } from '@/shared/ui/kit/loader';

interface CatalogFiltersProps {
    className?: string;
    common: (toGenres: () => void, toTags: () => void) => ReactNode;
    genres: (onBack: () => void) => ReactNode;
    tags: (onBack: () => void) => ReactNode;
}

export const CatalogFiltersLayout = (props: CatalogFiltersProps) => {
    const { className, common, genres, tags } = props;

    const [tagsOpen, setTagsOpen] = useState(false);
    const [genresOpen, setGenresOpen] = useState(false);

    return (
        <div className={cn('relative bg-card  rounded-lg h-full overflow-hidden', className)}>
            <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                {!tagsOpen && !genresOpen && (
                    <Slot className={cls.fadeOut}>
                        {common(
                            () => setGenresOpen(true),
                            () => setTagsOpen(true),
                        )}
                    </Slot>
                )}
                {genresOpen && (
                    <Slot className={cls.fadeIn}>{genres(() => setGenresOpen(false))}</Slot>
                )}
                {tagsOpen && <Slot className={cls.fadeIn}>{tags(() => setTagsOpen(false))}</Slot>}
            </Suspense>
        </div>
    );
};
