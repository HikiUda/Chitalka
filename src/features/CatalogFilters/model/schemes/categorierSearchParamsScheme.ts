import { BookmarksEnum, MangaStatusEnum, MangaTypeEnum } from '@/shared/entities/manga';
import { z, ZodTypeAny } from 'zod';
import { parseDate } from '@internationalized/date';
import { OrderEnum } from '@/shared/types/order';
import { SortByEnum } from '@/shared/api/mangaList';

const RangeFromToScheme = z.coerce.number().int().optional().catch(undefined);
const RateFromToScheme = z.coerce.number().min(0).max(10).optional().catch(undefined);
const releaseDateFromToScheme = z
    .string()
    .transform((val) => {
        try {
            return parseDate(val);
        } catch {
            return undefined;
        }
    })
    .optional()
    .catch(undefined);
const tagsGenresScheme = z
    .string()
    .transform((val) => val.split(',').map((v) => parseInt(v)))
    .pipe(z.number().int().array())
    .optional()
    .catch(undefined);

const StringToStringArray = <T extends ZodTypeAny>(scheme: T) =>
    z
        .string()
        .transform((val) => val.split(','))
        .pipe(scheme.array())
        .optional()
        .catch(undefined);

export const categorierSearchParamsScheme = z.object({
    sortBy: SortByEnum.optional().catch(undefined),
    order: OrderEnum.optional().catch(undefined),
    search: z.string().optional().catch(undefined),
    genres: tagsGenresScheme,
    tags: tagsGenresScheme,
    notGenres: tagsGenresScheme,
    notTags: tagsGenresScheme,
    status: StringToStringArray(MangaStatusEnum),
    type: StringToStringArray(MangaTypeEnum),
    bookmarks: StringToStringArray(BookmarksEnum),
    ageRateFrom: RangeFromToScheme,
    ageRateTo: RangeFromToScheme,
    chapterCountFrom: RangeFromToScheme,
    chapterCountTo: RangeFromToScheme,
    rateCountFrom: RangeFromToScheme,
    rateCountTo: RangeFromToScheme,
    rateFrom: RateFromToScheme,
    rateTo: RateFromToScheme,
    releaseDateFrom: releaseDateFromToScheme,
    releaseDateTo: releaseDateFromToScheme,
});

export type CategorierSearchParamsType = z.infer<typeof categorierSearchParamsScheme>;
