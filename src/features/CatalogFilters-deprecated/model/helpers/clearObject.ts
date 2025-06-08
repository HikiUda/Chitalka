export function clearObj(original: object): object {
    return Object.fromEntries(
        Object.entries(original).filter(
            ([_, value]) =>
                value !== null &&
                value !== undefined &&
                !Number.isNaN(value) &&
                !(Array.isArray(value) && value.length === 0),
        ),
    );
}
