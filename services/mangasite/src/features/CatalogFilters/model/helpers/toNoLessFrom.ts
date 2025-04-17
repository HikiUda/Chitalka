export function toNoLessFrom(from: number, to: number) {
    return Number.isFinite(from) ? Math.max(from, to) : to;
}
