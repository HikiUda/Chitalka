export type BookPopularLastUpdated = {
    books: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        type: string;
    }[];
    bookLink: (urlId: string) => string;
    isLoading: boolean;
};
