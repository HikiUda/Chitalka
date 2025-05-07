import { delay, http, HttpResponse } from 'msw';
import { ChapterListItemType, ChapterListType } from './chaptersScheme';

export const mockChapterListItem: ChapterListItemType = {
    id: 0,
    tome: 1,
    chapter: 2,
    title: 'Title',
    createdAt: new Date(),
    isUserViewed: false,
};

export const mockChapterList: ChapterListType = {
    data: Array(30)
        .fill(0)
        .map((ch, ind) => ({ ...mockChapterListItem, id: ind })),
    prevPage: null,
    nextPage: null,
};

export const mockGetChapterList = (timeout?: number) => {
    return http.get('*/manga/:id/chapters', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockChapterList);
    });
};
