export function checkBoxArray<T>(array: T[], item: T) {
    return array.includes(item) ? array.filter((t) => item !== item) : array.concat([item]);
}
