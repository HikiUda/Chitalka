export const RateValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
export type RateValues = (typeof RateValues)[number];
