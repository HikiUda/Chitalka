export function emptyStringToUndefined(value: string | undefined) {
    return value?.trim() === '' ? undefined : value;
}
