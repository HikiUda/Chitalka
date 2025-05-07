import { delay, HttpResponse } from 'msw';
import { ChapterType } from './chapterScheme';
import { ChapterPageType, ChapterPagesType } from '@/entities/ChapterView';

export const mockChapterPage: ChapterPageType = {
    src: 'pass/pass/pass.jpg',
    type: 'image',
};
export const mockChapterPages: ChapterPagesType = {
    pageCount: 3,
    pages: [mockChapterPage, mockChapterPage, mockChapterPage],
};

export const mockChapter: ChapterType = {
    id: 0,
    tome: 1,
    chapter: 2,
    title: null,
    mangaTitle: 'some title',
    likeCount: 23,
    prevChapterId: null,
    nextChapterId: null,
    isUserLiked: false,
    isUserViewed: false,
    pages: mockChapterPages,
};

export const mockChapterApi = async (timeout?: number) => {
    if (timeout) await delay(timeout);
    return HttpResponse.json(mockChapter);
};
