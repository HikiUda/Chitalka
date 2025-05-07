import { UserDataScheme } from '@/shared/api/user';
import { BookmarksEnum, MangaStatusEnum, MangaTypeEnum } from '@/shared/entities/manga';
import { z } from 'zod';

const MangaTitleScheme = z.object({
    ru: z.string(),
    en: z.string().nullable(),
    origin: z.string().nullable(),
});

// ? have dublicate in categoriesApi
const MangaCategoriesScheme = z.object({
    id: z.number().int(),
    title: z.string(),
});

export const MangaScheme = z.object({
    id: z.number().int(),
    urlId: z.string(),
    title: MangaTitleScheme,
    otherTitles: z.string().array(),
    description: z.string(),
    chaptersCount: z.number().int(),
    rate: z.number().min(0).max(10),
    countRate: z.number().int(),
    releaseDate: z.coerce.date().nullable(),
    status: MangaStatusEnum,
    type: MangaTypeEnum,
    genres: MangaCategoriesScheme.array(),
    tags: MangaCategoriesScheme.array(),
    cover: z.string().nullable(),
    banner: z.string().nullable(),
    owner: UserDataScheme.omit({ jsonSettings: true }),
    authors: z.string().array(),
    artists: z.string().array(),
    publishers: z.string().array(),
    bookmark: BookmarksEnum.nullable(),
});

export type MangaTitleType = z.infer<typeof MangaTitleScheme>;
export type MangaCategoriesType = z.infer<typeof MangaCategoriesScheme>;
export type MangaType = z.infer<typeof MangaScheme>;
