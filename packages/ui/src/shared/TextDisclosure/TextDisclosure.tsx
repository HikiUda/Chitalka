import { FC, useState } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '../Button';
import { getStyleLineClamp } from '../StyleHooks';
import cls from './TextDisclosure.module.scss';

interface TextDisclosureProps {
    className?: string;
    text?: string;
}

export const TextDisclosure: FC<TextDisclosureProps> = (props) => {
    const { className, text } = props;
    const [close, setClose] = useState(true);

    return (
        <div className={classNames(cls.TextDisclosure, {}, [className])}>
            <div
                className={classNames(cls.text, {}, [
                    close ? getStyleLineClamp({ lineClamp: '4' }) : '',
                ])}
            >
                {text}
            </div>
            <Button
                onPress={() => setClose((prev) => !prev)}
                color="secondary"
                theme="clear"
                pressAnimation="scale"
                noHover
            >
                {close ? 'Подробнее...' : 'Скрыть'}
            </Button>
        </div>
    );
};
