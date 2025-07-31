import { createI18nModule } from '@/shared/kernel/i18n';

export const { useI18n } = createI18nModule({
    chaptersCount: { ru: 'Количество глав', en: 'Number of chapters' },
    rate: { ru: 'Рейтинг', en: 'Rating' },
    rateCount: { ru: 'Количество оценок', en: 'Number of ratings' },
    releaseDate: { ru: 'Дата релиза', en: 'Release date' },
    ageRating: { ru: 'Возрастной рейтинг', en: 'Age rating' },
    language: { ru: 'Язык', en: 'Language' },
    status: { ru: 'Статус', en: 'Status' },
    type: { ru: 'Тип', en: 'Type' },
    inBookmarks: { ru: 'В моих закладках', en: 'In my bookmarks' },
    genres: { ru: 'Жанры', en: 'Genres' },
    searchGenres: { ru: 'Поиск Жанров', en: 'Search genres' },
    tags: { ru: 'Теги', en: 'Tags' },
    searchTags: { ru: 'Поиск Тегов', en: 'Search tags' },
    apply: { ru: 'Применить', en: 'Apply' },
});
