import { FC, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useLocation } from 'react-router-dom';
import { Button } from '../Button';
import cls from './TextDisclosure.module.scss';

interface TextDisclosureProps {
    className?: string;
    text?: string;
    defaultOpen?: boolean;
}

export const TextDisclosure: FC<TextDisclosureProps> = (props) => {
    const { className, text, defaultOpen = false } = props;
    const [close, setClose] = useState(true);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const location = useLocation();

    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            const isOverflow = el.scrollHeight > el.clientHeight + 10;
            setIsOverflowing(isOverflow);
            setClose(!defaultOpen);
        }
    }, [location.pathname, text, defaultOpen]);

    return (
        <div className={classNames('', {}, [className])}>
            <div ref={textRef} className={classNames(cls.text, {}, [close ? '' : cls.expanded])}>
                {text}
            </div>
            {isOverflowing && (
                <Button
                    onPress={() => setClose((prev) => !prev)}
                    color="secondary"
                    theme="clear"
                    hoverAnimation="scale"
                    noHover
                >
                    {close ? 'Подробнее...' : 'Скрыть'}
                </Button>
            )}
        </div>
    );
};
