import { Options, localeMap } from '../const/localeMap';

export function getTimeRelativeNow(date: Date, options: Options = { locale: 'ru' }): string {
    if (isNaN(date.getTime())) return 'Invalid Date';
    const now = new Date();
    const rtf = new Intl.RelativeTimeFormat(localeMap[options.locale], { numeric: 'auto' });

    const seconds = Math.floor((date.getTime() - now.getTime()) / 1000);

    const intervals: [Intl.RelativeTimeFormatUnit, number][] = [
        ['year', seconds / (60 * 60 * 24 * 365)],
        ['month', seconds / (60 * 60 * 24 * 30)],
        ['week', seconds / (60 * 60 * 24 * 7)],
        ['day', seconds / (60 * 60 * 24)],
        ['hour', seconds / (60 * 60)],
        ['minute', seconds / 60],
        ['second', seconds],
    ];

    for (const [unit, value] of intervals) {
        const rounded = Math.round(value);
        if (Math.abs(rounded) >= 1) {
            return rtf.format(rounded, unit);
        }
    }

    return rtf.format(0, 'second');
}
