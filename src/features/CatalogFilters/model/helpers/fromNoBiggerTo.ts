export function fromNoBiggerTo(from: number, to: number) {
    return Number.isFinite(to) ? Math.min(from, to) : from;
}
