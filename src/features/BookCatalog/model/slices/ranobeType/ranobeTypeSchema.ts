import { z } from 'zod';
import { StringArrayField, StringArrayFieldUrl } from '../../helpers/filtersSchemas';
import { RanobeTypeEnum } from '@/shared/kernel/book/ranobeType';

export const ranobeTypeSchema = z.object({
    type: StringArrayField,
});
export const ranobeTypeSchemaUrl = z.object({
    type: StringArrayFieldUrl(RanobeTypeEnum),
});
