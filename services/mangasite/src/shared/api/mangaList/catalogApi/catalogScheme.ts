import { z, ZodTypeAny } from 'zod';
import { BookmarksEnum, MangaStatusEnum, MangaTypeEnum } from '@packages/model/src/entities/manga';
import { RangeScheme } from './rangeScheme';

const SortByEnum = z.enum([
    'rating',
    'updateDate',
    'ruAlphabetically',
    'enAlphabetically',
    'views',
    'likes',
    'chapterCount',
]);
export type SortByType = z.infer<typeof SortByEnum>;

export const OrderEnum = z.enum(['asc', 'desc']);
export type OrderType = z.infer<typeof OrderEnum>;

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
