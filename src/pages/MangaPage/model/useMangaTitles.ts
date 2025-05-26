import { useGetManga } from './useGetManga';
import { MangaIdType } from '@/shared/kernel/manga';

export type TitlesType = { title: string; content: string }[];
export type OtherTitlesType = { title: string; titles: string[] };

export function useMangaTitles(mangaId: MangaIdType): {
    titles: TitlesType;
    otherTitles: OtherTitlesType;
} {
    const { data } = useGetManga(mangaId);
    if (!data) return { titles: [], otherTitles: { title: '', titles: [] } };

    const titles: TitlesType = [
        {
            title: 'Название на русском',
            content: data.title.ru,
        },
    ];
    if (data.title.en) {
        titles.push({
            title: 'Название на английском',
            content: data.title.en,
        });
    }
    if (data.title.origin) {
        titles.push({
            title: 'Оригенальное название',
            content: data.title.origin,
        });
    }

    const otherTitles: OtherTitlesType = { title: 'Другие названия', titles: data.otherTitles };

    return { titles, otherTitles };
}
