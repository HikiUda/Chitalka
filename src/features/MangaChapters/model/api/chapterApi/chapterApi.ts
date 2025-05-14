import { $api } from '@/shared/api/deprecated/baseApi/kyBase';
import { MangaIdType } from '@/shared/kernel/manga';
import { queryOptions } from '@tanstack/react-query';
import { validateChapter } from './validateChapter';

class Chapter {
    async get(chapterId: MangaIdType) {
        const chapter = await $api.get(`manga/chapter/${chapterId}`).json();
        return await validateChapter(chapter);
    }

    getQueryOptions(chapterId: MangaIdType) {
        return queryOptions({
            queryKey: ['chapter', chapterId],
            queryFn: () => this.get(chapterId),
        });
    }
}

const ChapterApi = new Chapter();
export { ChapterApi };
