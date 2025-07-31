import { MangaType } from '@/shared/kernel/book/mangaTypes';
import { RanobeType } from '@/shared/kernel/book/ranobeType';
import { createI18nModule } from '@/shared/kernel/i18n';

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
        type: MangaType | RanobeType;
    }[];
    isLoading: boolean;
    bookLink: (urlId: string) => string;
};

export const { useI18n } = createI18nModule({
    header: {
        ru: 'Сейчас читают',
        en: 'Now Read',
    },
    moreViewed: {
        ru: 'Просматриваемые',
        en: 'More viewed',
    },
    rating: {
        ru: 'Рейтинговые',
        en: 'Rating',
    },
    new: {
        ru: 'Новинки',
        en: 'New',
    },
});
