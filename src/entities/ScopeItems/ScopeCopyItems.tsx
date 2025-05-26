import { toast } from 'sonner';
import { ScopeItems } from './ScopeItems';

export type ScopeCopyItemsProps = {
    title?: string;
    items: string | string[];
};

export const ScopeCopyItems = (props: ScopeCopyItemsProps) => {
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
        <ScopeItems
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
