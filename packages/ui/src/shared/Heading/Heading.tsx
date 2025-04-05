import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './Heading.module.scss';

type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type HeaderColor = 'plain' | 'primary' | 'secondary';

interface HeadingProps {
    className?: string;
    children?: ReactNode;
    HeadingTag?: HeadingTagType;
    color?: HeaderColor;
    italic?: boolean;
    bold?: boolean;
}

export const Heading = memo((props: HeadingProps) => {
    const { className, HeadingTag = 'h4', children, color = 'plain', italic, bold } = props;

    return (
        <HeadingTag
            className={classNames('', { [cls.italic]: italic, [cls.bold]: bold }, [
                className,
                cls[HeadingTag],
                cls[color],
            ])}
        >
            {children}
        </HeadingTag>
    );
});
