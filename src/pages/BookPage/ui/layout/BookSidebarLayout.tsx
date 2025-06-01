import { FC } from 'react';
import { BasicInfo, BookMetaCopyItems, BookMetaLinks } from '@/entities/BookInfo';

interface BookSidebarLayoutProps {
    className?: string;
    basicInfo: BasicInfo[];
    otherTitles: { name: string; titles: string[] };
}

export const BookSidebarLayout: FC<BookSidebarLayoutProps> = (props) => {
    const { className, otherTitles, basicInfo } = props;
    return (
        <div className={className}>
            {basicInfo.map((info, ind) => (
                <BookMetaLinks key={ind} title={info.title} links={info.value} />
            ))}
            {!!otherTitles.titles.length && (
                <BookMetaCopyItems title={otherTitles.name} items={otherTitles.titles} />
            )}
        </div>
    );
};
