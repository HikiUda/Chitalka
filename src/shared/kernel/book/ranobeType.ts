import { z } from 'zod';

export const RanobeType = {
    Japan: 'Japan',
    Korea: 'Korea',
    China: 'China',
    Foreign: 'Foreign',
    Russia: 'Russia',
    Fanfic: 'Fanfic',
} as const;
export const RanobeTypeEnum = z.nativeEnum(RanobeType);
export type RanobeType = ValueOf<typeof RanobeType>;
