import type { Mods } from './types/classNamesType';

export function classNames(
    cls: string | undefined,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls || '',
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([classNames]) => classNames),
    ].join(' ');
}
