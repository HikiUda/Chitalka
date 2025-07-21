import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../helpers/filtersSchemas';
import { MangaTypeEnum } from '@/shared/kernel/book/mangaTypes';

export const mangaTypeSchema = z.object({
    type: StringArrayField,
});
export const mangaTypeSchemaUrl = z.object({
    type: StringArrayFieldUrl(MangaTypeEnum),
});
