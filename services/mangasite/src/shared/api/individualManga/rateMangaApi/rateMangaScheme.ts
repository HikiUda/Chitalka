import { z } from 'zod';

export const RateMangaScheme = z.object({
    rate: z.number().int().nullable(),
    userId: z.number().int(),
    mangaId: z.number().int(),
});

export type RateMangaType = z.infer<typeof RateMangaScheme>;
