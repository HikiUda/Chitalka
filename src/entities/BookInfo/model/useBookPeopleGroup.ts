import { useMemo } from 'react';
import { LinksProps } from '../ui/BookMetaLinks';
import { PeopleRole } from '@/shared/kernel/book/people';
import { getRoute } from '@/shared/kernel/router';
import { createI18nModule } from '@/shared/kernel/i18n';

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

const { useI18n } = createI18nModule({
    Author: { ru: 'Авторы', en: 'Authors' },
    Artist: { ru: 'Художники', en: 'Artists' },
    Publisher: { ru: 'Издатели', en: 'Publishers' },
});

export function useBookPeopleGroup(people: Person[]) {
    const t = useI18n();
    return useMemo(() => {
        const authors: PeopleGroup = {
            title: t('Author'),
            people: getPeopleByRole(people, 'Author'),
        };
        const artists: PeopleGroup = {
            title: t('Artist'),
            people: getPeopleByRole(people, 'Artist'),
        };
        const publishers: PeopleGroup = {
            title: t('Publisher'),
            people: getPeopleByRole(people, 'Publisher'),
        };

        return { authors, artists, publishers };
    }, [people, t]);
}
