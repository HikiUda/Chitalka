import { useMemo } from 'react';
import { getRoute } from '@/shared/kernel/router';

type CategoryInput = {
    id: number;
    title: string;
};

export type CategoryOutput = {
    id: number;
    title: string;
    link: string;
    specialSimbol?: string;
};

export function useCategoriesList(genresInput: CategoryInput[], tagsInput: CategoryInput[]) {
    const genres: CategoryOutput[] = useMemo(() => {
        return genresInput.map((genre) => ({
            ...genre,
            link: `${getRoute.catalog()}?genres=${genre.id}`,
        }));
    }, [genresInput]);
    const tags: CategoryOutput[] = useMemo(() => {
        return tagsInput.map((tag) => ({
            ...tag,
            link: `${getRoute.catalog()}?tags=${tag.id}`,
            specialSimbol: '#',
        }));
    }, [tagsInput]);
    const categories = useMemo(() => {
        return [...genres, ...tags];
    }, [genres, tags]);

    return { genres, tags, categories };
}
