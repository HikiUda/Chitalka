import { z } from 'zod';
import { ResponseArrayDataScheme } from '@packages/model/src/types/pagination';
import { MangaListItemBaseScheme } from './mangaListItmeBase';

export const MangaListItemContinueReadScheme = MangaListItemBaseScheme.pick({
    id: true,
    urlId: true,
    title: true,
    cover: true,
    tome: true,
    chapter: true,
    chapterCount: true,
    readedChapters: true,
});

export const MangaListItemContinueReadResponseArrayData = ResponseArrayDataScheme(
    MangaListItemContinueReadScheme,
);

export type MangaListItemContinueReadType = z.infer<typeof MangaListItemContinueReadScheme>;
