import { isBefore, parseISO } from 'date-fns';

export function clearEmptyField<T extends object>(original: T): T {
    return Object.fromEntries(Object.entries(original).filter(([_, value]) => !!value)) as T;
}

function fromNoBiggerTo(from: number, to: number) {
    return Number.isFinite(to) ? Math.min(from, to) : from;
}

type ValidateFromToData = {
    ageRateFrom?: number;
    ageRateTo?: number;
    chapterCountFrom?: number;
    chapterCountTo?: number;
    rateCountFrom?: number;
    rateCountTo?: number;
    rateFrom?: number;
    rateTo?: number;
    releaseDateFrom?: string;
    releaseDateTo?: string;
};

export function validateFromTo<T extends object & ValidateFromToData>(data: T): T {
    const validData = { ...data };

    if (data.ageRateFrom && data.ageRateTo) {
        validData.ageRateFrom = fromNoBiggerTo(data.ageRateFrom, data.ageRateTo);
    }
    if (data.chapterCountFrom && data.chapterCountTo) {
        validData.chapterCountFrom = fromNoBiggerTo(data.chapterCountFrom, data.chapterCountTo);
    }
    if (data.rateCountFrom && data.rateCountTo) {
        validData.rateCountFrom = fromNoBiggerTo(data.rateCountFrom, data.rateCountTo);
    }
    if (data.rateFrom && data.rateTo) {
        validData.rateFrom = fromNoBiggerTo(data.rateFrom, data.rateTo);
    }
    if (data.releaseDateFrom && data.releaseDateTo) {
        if (!isBefore(parseISO(data.releaseDateFrom), parseISO(data.releaseDateTo))) {
            validData.releaseDateFrom = data.releaseDateTo;
        }
    }
    return validData;
}
