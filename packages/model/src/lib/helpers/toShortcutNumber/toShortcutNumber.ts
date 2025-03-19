export function toShortcutNumber(num: number): string | number {
    if (num < 1000) return num;
    if (num < 1000000) {
        return String(num).slice(0, -3) + 'тыс';
    }
    return String(num).slice(0, -6) + 'м';
}
