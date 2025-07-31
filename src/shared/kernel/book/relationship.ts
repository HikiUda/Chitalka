import z from 'zod';

export const BookRelationship = {
    Continuation: 'Continuation',
    Prequel: 'Prequel',
    Adaptation: 'Adaptation',
    Source: 'Source',
    Spinoff: 'Spinoff',
    Other: 'Other',
} as const;
export const BookRelationshipEnum = z.nativeEnum(BookRelationship);
export type BookRelationship = ValueOf<typeof BookRelationship>;
