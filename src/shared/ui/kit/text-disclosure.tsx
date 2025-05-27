import { FC, useEffect, useRef, useState } from 'react';
import { Button } from './button';
import { cn } from '@/shared/lib/css';

interface TextDisclosureProps {
    className?: string;
    text?: string;
    defaultOpen?: boolean;
}

export const TextDisclosure: FC<TextDisclosureProps> = (props) => {
    const { className, text, defaultOpen = false } = props;
    const [close, setClose] = useState(true);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            const isOverflow = el.scrollHeight > el.clientHeight + 10;
            setIsOverflowing(isOverflow);
            setClose(!defaultOpen);
        }
    }, [text, defaultOpen]);

    return (
        <div className={className}>
            <div
                ref={textRef}
                className={cn(
                    'whitespace-pre-line overflow-hidden max-h-24',
                    !close && 'max-h-none',
                )}
            >
                {text}
            </div>
            {isOverflowing && (
                <Button
                    onClick={() => setClose((prev) => !prev)}
                    variant="clear"
                    size="clear"
                    className="text-secondary mt-2"
                >
                    {close ? 'Подробнее...' : 'Скрыть'}
                </Button>
            )}
        </div>
    );
};
