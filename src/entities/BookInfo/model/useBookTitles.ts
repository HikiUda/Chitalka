const TitlesName = {
    ru: 'Название на русском',
    en: 'Название на английском',
    origin: 'Оригенальное название',
} as const;

type BookTitlesInput = {
    title: {
        ru: string;
        en: string | null;
        origin: string | null;
    };
    otherTitles: string[];
};

export function useBookTitles(data: BookTitlesInput) {
    const { title } = data;
    const lang = 'ru';

    const main = title[lang] || title.ru;
    const subtitle =
        title.origin ||
        Object.values(title).find((value) => {
            if (value === null) return false;
            if (value === main) return false;
            return true;
        }) ||
        null;

    const titles = (Object.keys(TitlesName) as (keyof typeof TitlesName)[])
        .map((lang) => {
            if (!title[lang]) return null;
            return {
                name: TitlesName[lang],
                title: title[lang],
                lang,
            };
        })
        .filter((item) => item !== null);

    const otherTitles = {
        name: 'Другие названия',
        titles: data.otherTitles,
    };

    return {
        main,
        subtitle,
        titles,
        otherTitles,
    };
}
