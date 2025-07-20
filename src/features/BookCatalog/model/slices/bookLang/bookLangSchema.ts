import { z } from 'zod';
import { BookLangEnum } from '@/shared/kernel/book/bookLang';

export const bookLangSchema = z.object({
    bookLang: BookLangEnum.optional().catch(undefined),
});
export const bookLangSchemaUrl = z.object({
    bookLang: BookLangEnum.optional().catch(undefined),
});
