import { useGetManga } from './useGetManga';
import { MangaIdType } from '@/shared/kernel/manga';

export type TitlesType = { title: string; content: string }[];
export type OtherTitlesType = { title: string; titles: string[] };

export function useMangaTitles(mangaId: MangaIdType): {
    titles: TitlesType;
    otherTitles: OtherTitlesType;
} {
    const { manga } = useGetManga(mangaId);

    const titles: TitlesType = [
        {
            title: 'Название на русском',
            content: manga.title.ru,
        },
    ];
    if (manga.title.en) {
        titles.push({
            title: 'Название на английском',
            content: manga.title.en,
        });
    }
    if (manga.title.origin) {
        titles.push({
            title: 'Оригенальное название',
            content: manga.title.origin,
        });
    }

    const otherTitles: OtherTitlesType = { title: 'Другие названия', titles: manga.otherTitles };

    return { titles, otherTitles };
}
