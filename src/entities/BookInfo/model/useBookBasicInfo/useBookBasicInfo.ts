import { useMemo } from 'react';
import { LinksProps } from '../../ui/BookMetaLinks';
import { BookStatus } from '@/shared/kernel/book/bookStatus';

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
    return useMemo(() => {
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
    }, [catalog, data.releaseDate, data.status, data.type]);
}
