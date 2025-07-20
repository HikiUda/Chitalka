import { z } from 'zod';

export const BookLang = {
    ru: 'ru',
    en: 'en',
} as const;
export const BookLangEnum = z.nativeEnum(BookLang);
export type BookLang = ValueOf<typeof BookLang>;
