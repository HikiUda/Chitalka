import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './CardBlock.module.scss';

type CardBlockBackgroundColor = 'bg' | 'block';

interface CardBlockProps {
    className?: string;
    children?: ReactNode;
    shadow?: boolean;
    backgroundColor?: CardBlockBackgroundColor;
}

export const CardBlock = memo((props: CardBlockProps) => {
    const { className, children, shadow, backgroundColor = 'block' } = props;

    return (
        <div
            className={classNames(cls.CardBlock, { [cls.shadow]: shadow }, [
                className,
                cls[backgroundColor],
            ])}
        >
            {children}
        </div>
    );
});
