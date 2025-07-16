export const PeopleRole = {
    Author: 'Author',
    Artist: 'Artist',
    Publisher: 'Publisher',
} as const;
export type PeopleRole = ValueOf<typeof PeopleRole>;
