import { z } from 'zod';
import { PaginationScheme } from '@packages/model/src/types/pagination';
import { MangaListItemBaseScheme } from './mangaListItmeBase';

export const MangaListItemCatalogScheme = MangaListItemBaseScheme.pick({
    id: true,
    urlId: true,
    title: true,
    cover: true,
    type: true,
    rate: true,
    bookmark: true,
});
export const MangaListItemCatalogPagination = PaginationScheme(MangaListItemCatalogScheme);

export type MangaListItemCatalogType = z.infer<typeof MangaListItemCatalogScheme>;
