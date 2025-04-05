import { FC, useCallback, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
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

    const textRef = useCallback(
        (el: HTMLDivElement | null) => {
            if (el) {
                const isOverflow = el.scrollHeight > el.clientHeight + 10;
                setIsOverflowing(isOverflow);
                setClose(!defaultOpen);
            }
        },
        [defaultOpen],
    );

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
