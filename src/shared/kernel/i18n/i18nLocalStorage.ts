import z from 'zod';
import { AppLang } from './i18n';
import { PersistStorage } from '@/shared/lib/helpers/persistStorage';

export const AppLangSchema = z.object({
    lang: z.nativeEnum(AppLang),
});
export const appLangLocalStorage = new PersistStorage('lang', AppLangSchema, {
    lang: 'ru',
});
