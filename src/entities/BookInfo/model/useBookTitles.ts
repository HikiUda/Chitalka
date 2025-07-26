import { useMemo } from 'react';

const TitlesName = {
    main: 'Основное название',
    en: 'Название на английском',
    origin: 'Оригенальное название',
} as const;

type BookTitlesInput = {
    title: {
        main: string;
        en: string | null;
        origin: string | null;
    };
    otherTitles: string[];
};

export function useBookTitles(data: BookTitlesInput) {
    const { title } = data;

    return useMemo(() => {
        const titles = (Object.keys(TitlesName) as (keyof typeof TitlesName)[])
            .map((type) => {
                if (!title[type]) return null;
                return {
                    name: TitlesName[type],
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
                name: 'Другие названия',
                titles: data.otherTitles,
            },
        };
    }, [data.otherTitles, title]);
}
