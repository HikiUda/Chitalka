import { LinksProps } from '../../ui/BookMetaLinks';
import { BookStatus } from '@/shared/kernel/book';

export type BookBasicInfoInput = {
    type: string;
    status: BookStatus;
    releaseDate: Date | null;
};

export type BasicInfoItem = {
    title: string;
    value: LinksProps;
};

export function useBookBasicInfo(data: BookBasicInfoInput, catalog: string) {
    const type: BasicInfoItem = {
        title: 'Тип',
        value: { content: data.type, link: `${catalog}?type=${data.type}` },
    };
    const status: BasicInfoItem = {
        title: 'Статус',
        value: { content: data.status, link: `${catalog}?status=${data.status}` },
    };
    const releaseDate: BasicInfoItem | null = data.releaseDate && {
        title: 'Выпуск',
        value: {
            content: String(data.releaseDate.getFullYear()),
            link: `${catalog}?releaseDate=${data.releaseDate.toISOString()}`,
        },
    };

    const basicInfo = [type, status].concat(releaseDate || []);

    return { type, status, releaseDate, basicInfo };
}
