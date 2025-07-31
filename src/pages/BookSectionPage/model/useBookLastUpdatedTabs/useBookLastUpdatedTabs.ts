import { MangaType } from '@/shared/kernel/book/mangaTypes';
import { RanobeType } from '@/shared/kernel/book/ranobeType';
import { createI18nModule } from '@/shared/kernel/i18n';
import { getRoute } from '@/shared/kernel/router';

export type BookLastUpdatedTab = {
    value: 'all' | 'my';
    title: string;
    catalogLink: string;
    data: {
        id: number;
        urlId: string;
        title: string;
        cover: string;
        tome: number;
        chapter: number;
        chapterCreatedAt: string;
        chapterId: number;
        type: MangaType | RanobeType;
    }[];
    fetchNextPage: () => void;
    isFetching: boolean;
    hasNextPage: boolean;
    bookLink: typeof getRoute.MANGA_READ | typeof getRoute.RANOBE_READ;
};

export const { useI18n } = createI18nModule({
    all: {
        ru: 'Все',
        en: 'All',
    },
    my: {
        ru: 'Мои',
        en: 'My',
    },
});
