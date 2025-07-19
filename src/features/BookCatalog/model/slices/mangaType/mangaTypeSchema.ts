import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../filtersSchemas';
import { MangaTypeEnum } from '@/shared/kernel/book';

export const mangaTypeSchema = z.object({
    type: StringArrayField,
});
export const mangaTypeSchemaUrl = z.object({
    type: StringArrayFieldUrl(MangaTypeEnum),
});
