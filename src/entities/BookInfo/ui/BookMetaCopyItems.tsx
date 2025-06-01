import { toast } from 'sonner';
import { BookMetaItem } from './BookMetaItem';

export type BookMetaCopyItemsProps = {
    title: string;
    items: string | string[];
};

export const BookMetaCopyItems = (props: BookMetaCopyItemsProps) => {
    const { title, items } = props;

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.info('Текст скопирован');
        } catch (err) {
            toast.error('Текст не скопирован');
        }
    };

    return (
        <BookMetaItem
            title={title}
            items={items}
            renderItems={(item) => (
                <span
                    onClick={() => handleCopy(item)}
                    className="hover:underline underline-offset-4 hover:opacity-90  cursor-pointer"
                >
                    {item}
                </span>
            )}
        />
    );
};
