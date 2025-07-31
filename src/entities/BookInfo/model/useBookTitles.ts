import { useMemo } from 'react';
import { createI18nModule } from '@/shared/kernel/i18n';

type BookTitlesInput = {
    title: {
        main: string;
        en: string | null;
        origin: string | null;
    };
    otherTitles: string[];
};
const { useI18n } = createI18nModule({
    main: { ru: 'Основное название', en: 'Main title' },
    en: { ru: 'Название на английском', en: 'English title' },
    origin: { ru: 'Оригенальное название', en: 'Original title' },
    otherTitles: { ru: 'Другие названия', en: 'Other titles' },
});

export function useBookTitles(data: BookTitlesInput) {
    const { title } = data;
    const t = useI18n();

    return useMemo(() => {
        const titles = (['main', 'en', 'origin'] as const)
            .map((type) => {
                if (!title[type]) return null;
                return {
                    name: t(type),
                    title: title[type],
                    type,
                };
            })
            .filter((item) => item !== null);

        return {
            main: title.main,
            subtitle: title.origin || title.en,
            titles,
            otherTitles: {
                name: t('otherTitles'),
                titles: data.otherTitles,
            },
        };
    }, [data.otherTitles, t, title]);
}
