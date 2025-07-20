import { ReactNode, Suspense, useCallback, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ErrorBoundary } from 'react-error-boundary';
import cls from './catalog-filters.module.css';
import { cn } from '@/shared/lib/css';
import { Loader } from '@/shared/ui/kit/loader';

type CatalogFiltersProps = {
    className?: string;
    common: (toGenres: () => void, toTags: () => void) => ReactNode;
    genres: (onBack: () => void) => ReactNode;
    tags: (onBack: () => void) => ReactNode;
};

export const CatalogFiltersLayout = (props: CatalogFiltersProps) => {
    const { className, common, genres, tags } = props;

    const [tagsOpen, setTagsOpen] = useState(false);
    const [genresOpen, setGenresOpen] = useState(false);

    const toGenres = useCallback(() => {
        setGenresOpen(true);
    }, []);
    const toTags = useCallback(() => {
        setTagsOpen(true);
    }, []);
    const fromGenres = useCallback(() => {
        setGenresOpen(false);
    }, []);
    const fromTags = useCallback(() => {
        setTagsOpen(false);
    }, []);

    return (
        <div className={cn('relative bg-card h-full overflow-hidden', className)}>
            <ErrorBoundary fallback={<div>Что то пошло не так.</div>}>
                <Suspense fallback={<Loader variant="flower" className="mx-auto" />}>
                    {!tagsOpen && !genresOpen && (
                        <Slot className={cls.fadeOut}>{common(toGenres, toTags)}</Slot>
                    )}
                    {genresOpen && <Slot className={cls.fadeIn}>{genres(fromGenres)}</Slot>}
                    {tagsOpen && <Slot className={cls.fadeIn}>{tags(fromTags)}</Slot>}
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};
