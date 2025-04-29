import { z, ZodTypeAny } from 'zod';
import { BookmarksEnum, MangaStatusEnum, MangaTypeEnum } from '@packages/model/src/entities/manga';
import { OrderEnum } from '@packages/model/src/types/order';
import { RangeScheme } from './rangeScheme';

export const SortByConst = {
    rating: 'rating',
    updateDate: 'updateDate',
    createDate: 'createDate',
    ruAlphabetically: 'ruAlphabetically',
    enAlphabetically: 'enAlphabetically',
    views: 'views',
    likes: 'likes',
    chapterCount: 'chapterCount',
} as const;

export const SortByEnum = z.nativeEnum(SortByConst);
export type SortByType = z.infer<typeof SortByEnum>;

const TagsGenresScheme = z
    .number()
    .array()
    .transform((val) => val.join(','))
    .pipe(z.string())
    .catch('');

const StringArrayToString = (scheme: ZodTypeAny) =>
    z.array(scheme).transform((val) => val.join(','));

export const CatalogFiltersScheme = z
    .object({
        sortBy: SortByEnum.default('rating'),
        search: z.string().optional(),
        genres: TagsGenresScheme.optional(),
        tags: TagsGenresScheme.optional(),
        notGenres: TagsGenresScheme.optional(),
        notTags: TagsGenresScheme.optional(),
        order: OrderEnum.default('desc'),
        status: StringArrayToString(MangaStatusEnum).optional(),
        type: StringArrayToString(MangaTypeEnum).optional(),
        bookmarks: StringArrayToString(BookmarksEnum).optional(),
    })
    .merge(RangeScheme);

export type CatalogFiltersType = z.infer<typeof CatalogFiltersScheme>;
