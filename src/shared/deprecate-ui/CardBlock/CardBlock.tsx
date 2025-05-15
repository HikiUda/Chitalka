import { DetailedHTMLProps, HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './CardBlock.module.scss';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type CardBlockBackgroundColor = 'bg' | 'block';

interface CardBlockProps extends DivProps {
    className?: string;
    children?: ReactNode;
    shadow?: boolean;
    backgroundColor?: CardBlockBackgroundColor;
}

export const CardBlock = memo((props: CardBlockProps) => {
    const { className, children, shadow, backgroundColor = 'block', ...otherProps } = props;

    return (
        <div
            className={classNames(cls.CardBlock, { [cls.shadow]: shadow }, [
                className,
                cls[backgroundColor],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
