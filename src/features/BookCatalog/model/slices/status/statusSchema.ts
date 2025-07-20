import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../filtersSchemas';
import { BookStatusEnum } from '@/shared/kernel/book/bookStatus';

export const statusSchema = z.object({
    status: StringArrayField,
});
export const statusSchemaUrl = z.object({
    status: StringArrayFieldUrl(BookStatusEnum),
});
