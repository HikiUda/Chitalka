import { MangaType } from '@/shared/kernel/book/mangaTypes';
import { RanobeType } from '@/shared/kernel/book/ranobeType';

export type BookPopularLastUpdated = {
    books: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        type: MangaType | RanobeType;
    }[];
    bookLink: (urlId: string) => string;
    isLoading: boolean;
};
