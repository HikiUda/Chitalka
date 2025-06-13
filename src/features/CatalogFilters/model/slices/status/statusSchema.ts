import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../filtersSchemas';
import { MangaStatusEnum } from '@/shared/kernel/manga';

export const statusSchema = z.object({
    status: StringArrayField,
});
export const statusSchemaUrl = z.object({
    status: StringArrayFieldUrl(MangaStatusEnum),
});
