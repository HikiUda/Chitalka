import { Options, localeMap } from '../const/localeMap';

export function toShortDate(date: Date, options: Options = { locale: 'ru' }) {
    if (isNaN(date.getTime())) return 'Invalid Date';

    return new Intl.DateTimeFormat(localeMap[options.locale], {
        dateStyle: 'short',
    }).format(date);
}
