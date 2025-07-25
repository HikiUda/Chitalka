import { getRoute } from '@/shared/kernel/router';

type BookLastUpdatedTabInput = {
    data: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        chapterCreatedAt: string;
        chapterId: number;
        type: string;
    }[];
    fetchNextPage: () => void;
    isFetching: boolean;
    hasNextPage: boolean;
};

export type BookLastUpdatedTabOutput = {
    value: string;
    title: string;
    catalogLink: string;
    authOnly?: boolean;
} & BookLastUpdatedTabInput;

type UseLastUpdatedMangaTabsProps = {
    allBook: BookLastUpdatedTabInput;
    myBook: BookLastUpdatedTabInput;
    book: 'manga' | 'ranobe';
};

export function useBookLastUpdatedTabs(
    props: UseLastUpdatedMangaTabsProps,
): BookLastUpdatedTabOutput[] {
    const { allBook, myBook, book } = props;
    const catalogLink = book === 'manga' ? getRoute.MANGA_CATALOG() : getRoute.RANOBE_CATALOG();

    return [
        {
            value: 'all',
            title: 'Все',
            catalogLink: `${catalogLink}?sortBy=updateDate`,
            ...allBook,
        },
        {
            value: 'my',
            title: 'Мои',
            catalogLink: `${catalogLink}?sortBy=updateDate&bookmarks=Reading,Readed`,
            authOnly: true,
            ...myBook,
        },
    ];
}
