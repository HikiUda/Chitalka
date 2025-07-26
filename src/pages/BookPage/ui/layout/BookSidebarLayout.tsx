import { BasicInfoItem, BookMetaCopyItems, BookMetaLinks } from '@/entities/BookInfo';

type Person = {
    id: number;
    name: string;
    avatar: string | null;
};

type BookSidebarLayoutProps = {
    className?: string;
    basicInfo: BasicInfoItem[];
    otherTitles: { name: string; titles: string[] };
};

export const BookSidebarLayout = (props: BookSidebarLayoutProps) => {
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
