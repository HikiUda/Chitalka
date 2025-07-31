import { useMemo } from 'react';
import { LinksProps } from '../../ui/BookMetaLinks';
import { BookStatus } from '@/shared/kernel/book/bookStatus';
import { createI18nModule } from '@/shared/kernel/i18n';

export type BookBasicInfoInput = {
    type: string;
    status: BookStatus;
    releaseDate: Date | null;
};

export type BasicInfoItem = {
    title: string;
    value: LinksProps;
};
const { useI18n } = createI18nModule({
    type: { ru: 'Тип', en: 'Type' },
    status: { ru: 'Статус', en: 'Status' },
    release: { ru: 'Выпуск', en: 'Release' },
});

export function useBookBasicInfo(data: BookBasicInfoInput, catalog: string) {
    const t = useI18n();
    return useMemo(() => {
        const type: BasicInfoItem = {
            title: t('type'),
            value: { content: data.type, link: `${catalog}?type=${data.type}` },
        };
        const status: BasicInfoItem = {
            title: t('status'),
            value: { content: data.status, link: `${catalog}?status=${data.status}` },
        };
        const releaseDate: BasicInfoItem | null = data.releaseDate && {
            title: t('release'),
            value: {
                content: String(data.releaseDate.getFullYear()),
                link: `${catalog}?releaseDate=${data.releaseDate.toISOString()}`,
            },
        };
        const basicInfo = [type, status].concat(releaseDate || []);

        return { type, status, releaseDate, basicInfo };
    }, [catalog, data.releaseDate, data.status, data.type, t]);
}
