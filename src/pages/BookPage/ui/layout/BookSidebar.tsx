import { memo } from 'react';
import {
    BasicInfoItem,
    BookMetaCopyItems,
    BookMetaLinks,
    useBookPeopleGroup,
} from '@/entities/BookInfo';
import { PeopleRole } from '@/shared/kernel/book/people';

type Person = {
    name: string;
    role: PeopleRole[];
};

type BookSidebarProps = {
    basicInfo: BasicInfoItem[];
    otherTitles: { name: string; titles: string[] };
    people: Person[];
};

export const BookSidebar = memo((props: BookSidebarProps) => {
    const { otherTitles, basicInfo, people } = props;
    const { authors, artists, publishers } = useBookPeopleGroup(people);
    return (
        <>
            {basicInfo.map((info, ind) => (
                <BookMetaLinks key={ind} title={info.title} links={info.value} />
            ))}
            {!!authors.people.length && (
                <BookMetaLinks key={authors.title} title={authors.title} links={authors.people} />
            )}
            {!!artists.people.length && (
                <BookMetaLinks key={artists.title} title={artists.title} links={artists.people} />
            )}
            {!!publishers.people.length && (
                <BookMetaLinks
                    key={publishers.title}
                    title={publishers.title}
                    links={publishers.people}
                />
            )}
            {!!otherTitles.titles.length && (
                <BookMetaCopyItems title={otherTitles.name} items={otherTitles.titles} />
            )}
        </>
    );
});
BookSidebar.displayName = 'BookSidebar';
