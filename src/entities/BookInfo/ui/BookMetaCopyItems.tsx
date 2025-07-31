import { toast } from 'sonner';
import { BookMetaItem } from './BookMetaItem';
import { createI18nModule } from '@/shared/kernel/i18n';

export type BookMetaCopyItemsProps = {
    title: string;
    items: string | string[];
};

const { useI18n } = createI18nModule({
    textCopy: { ru: 'Текст скопирован', en: 'Text copied' },
    textNotCopy: { ru: 'Текст не скопирован', en: 'Text not copied' },
});

export const BookMetaCopyItems = (props: BookMetaCopyItemsProps) => {
    const { title, items } = props;
    const t = useI18n();

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.info(t('textCopy'));
        } catch (err) {
            toast.error(t('textNotCopy'));
        }
    };

    return (
        <BookMetaItem
            title={title}
            items={items}
            renderItems={(item) => (
                <span
                    key={item}
                    onClick={() => handleCopy(item)}
                    className="hover:underline underline-offset-4 hover:opacity-90  cursor-pointer"
                >
                    {item}
                </span>
            )}
        />
    );
};
