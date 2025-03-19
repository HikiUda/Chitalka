import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './Heading.module.scss';

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';
type HeaderColor = 'plain' | 'primary' | 'secondary';
type HeaderStyle = 'none' | 'bold' | 'italic';

interface HeadingProps {
    className?: string;
    children?: ReactNode;
    HeaderTag?: HeaderTagType;
    color?: HeaderColor;
    style?: HeaderStyle;
}

export const Heading = memo((props: HeadingProps) => {
    const { className, HeaderTag = 'h3', children, color = 'plain', style = 'none' } = props;

    return (
        <HeaderTag
            className={classNames('', {}, [className, cls[HeaderTag], cls[color], cls[style]])}
        >
            {children}
        </HeaderTag>
    );
});
