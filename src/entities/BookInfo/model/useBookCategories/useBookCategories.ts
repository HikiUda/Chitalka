import { useMemo } from 'react';
import { CategoryCollapsedListItem } from '../../ui/CategoryCollapsedList';
import { AgeRating } from '@/shared/kernel/book/ageRating';

type CategoryInput = {
    id: number;
    title: string;
};

export type BookCategories = {
    genres: CategoryInput[];
    tags: CategoryInput[];
    ageRating: AgeRating;
};

export function useBookCategories(book: BookCategories, catalog: string) {
    const ageRating: CategoryCollapsedListItem = useMemo(() => {
        return {
            title: book.ageRating,
            link: `${catalog}?ageRating=${book.ageRating}`,
            specialSimbol: '+',
        };
    }, [book.ageRating, catalog]);

    const genres: CategoryCollapsedListItem[] = useMemo(() => {
        return book.genres.map((genre) => ({
            title: genre.title,
            link: `${catalog}?genres=${genre.id}`,
        }));
    }, [catalog, book.genres]);

    const tags: CategoryCollapsedListItem[] = useMemo(() => {
        return book.tags.map((tag) => ({
            title: tag.title,
            link: `${catalog}?tags=${tag.id}`,
            specialSimbol: '#',
        }));
    }, [catalog, book.tags]);

    const categories = useMemo(() => {
        return [ageRating, ...genres, ...tags];
    }, [ageRating, genres, tags]);

    return { ageRating, genres, tags, categories };
}
