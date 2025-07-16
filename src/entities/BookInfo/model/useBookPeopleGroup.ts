import { LinksProps } from '../ui/BookMetaLinks';
import { PeopleRole } from '@/shared/kernel/book/people';
import { getRoute } from '@/shared/kernel/router';

type Person = {
    name: string;
    role: PeopleRole[];
};

export type PeopleGroup = {
    title: string;
    people: LinksProps[];
};

function getPeopleByRole(people: Person[], role: PeopleRole): LinksProps[] {
    return people
        .filter((person) => person.role.includes(role))
        .map((person) => ({ content: person.name, link: getRoute.PEOPLE_NAME(person.name) }));
}

export function useBookPeopleGroup(people: Person[]) {
    const authors: PeopleGroup = {
        title: 'Авторы',
        people: getPeopleByRole(people, 'Author'),
    };
    const artists: PeopleGroup = {
        title: 'Художники',
        people: getPeopleByRole(people, 'Artist'),
    };
    const publishers: PeopleGroup = {
        title: 'Издатели',
        people: getPeopleByRole(people, 'Publisher'),
    };

    return { authors, artists, publishers };
}
