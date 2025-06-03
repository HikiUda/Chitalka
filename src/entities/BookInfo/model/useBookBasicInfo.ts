import { getRoute } from '@/shared/kernel/router';

type BookBasicInfoInput = {
    type: string;
    status: string;
    releaseDate: Date | null;
};

export type BasicInfo = {
    title: string;
    value: { content: string; link: string };
};

export function useBookBasicInfo(data: BookBasicInfoInput) {
    const catalog = getRoute.MANGA_CATALOG();

    const type: BasicInfo = {
        title: 'Тип',
        value: { content: data.type, link: `${catalog}?type=${data.type}` },
    };
    const status: BasicInfo = {
        title: 'Статус',
        value: { content: data.status, link: `${catalog}?status=${data.status}` },
    };
    const releaseDate: BasicInfo | null = data.releaseDate && {
        title: 'Выпуск',
        value: {
            content: String(data.releaseDate.getFullYear()),
            link: `${catalog}?releaseDate=${data.releaseDate.toISOString()}`,
        },
    };

    const basicInfo = [type, status].concat(releaseDate || []);

    return { type, status, releaseDate, basicInfo };
}
