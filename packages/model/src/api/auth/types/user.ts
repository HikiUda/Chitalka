import { z } from 'zod';

const JsonSettingsScheme = z.object({});

export const UserDataScheme = z.object({
    id: z.number(),
    name: z.string(),
    avatar: z.string().url().nullable(),
    jsonSettings: JsonSettingsScheme,
});

export type UserData = z.infer<typeof UserDataScheme>;
export type JsonSettings = z.infer<typeof JsonSettingsScheme>;
