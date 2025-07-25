export type BookNowRead = {
    heading: string;
    data: {
        id: number;
        urlId: string;
        title: string;
        rate: number;
        cover: string;
        bookmark: string | null;
        chapterCount: number;
        type: string;
    }[];
    isLoading: boolean;
};
