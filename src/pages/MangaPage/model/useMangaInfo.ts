import { useGetManga } from './useGetManga';
import { MangaIdType } from '@/shared/kernel/manga';
import { ScopeLinksProps } from '@/entities/ScopeItems';
import { getRoute } from '@/shared/kernel/router';

export function useMangaInfo(mangaId: MangaIdType): ScopeLinksProps[] {
    const { data } = useGetManga(mangaId);
    if (!data) return [];

    const { type, status, authors, artists, publishers } = data;
    const info: ScopeLinksProps[] = [
        {
            title: 'Type',
            links: { content: type, link: `${getRoute.catalog()}?type=${type}` },
        },
        {
            title: 'Status',
            links: { content: status, link: `${getRoute.catalog()}?status=${status}` },
        },
    ];

    if (authors.length) {
        info.push({
            title: 'Authors',
            links: authors.map((author) => ({ content: author, link: '' })),
        });
    }
    if (artists.length) {
        info.push({
            title: 'Artists',
            links: artists.map((artist) => ({ content: artist, link: '' })),
        });
    }
    if (publishers.length) {
        info.push({
            title: 'Publishers',
            links: publishers.map((publisher) => ({ content: publisher, link: '' })),
        });
    }

    return info;
}
