import z from 'zod';
import { AppThemeColor, AppThemeMode } from './appThemeConfig';
import { PersistStorage } from '@/shared/lib/helpers/persistStorage';

export const AppThemeSchema = z.object({
    mode: z.nativeEnum(AppThemeMode),
    color: z.nativeEnum(AppThemeColor).optional(),
});

export const appThemeLocalStorage = new PersistStorage('theme', AppThemeSchema, {
    mode: 'system',
});
