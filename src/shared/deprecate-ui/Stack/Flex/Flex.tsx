import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { getFlex, GetFlexProps } from './getFlex';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends GetFlexProps, DivProps {
    className?: string;
    children?: ReactNode;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        justify,
        align,
        direction,
        gap,
        max,
        wrap,
        flexGrow,
        flexShrink,
        ...otherProps
    } = props;

    const classes = getFlex({ justify, align, direction, gap, max, wrap, flexGrow, flexShrink });

    return (
        <div {...otherProps} className={classNames(className || '', {}, [classes])}>
            {children}
        </div>
    );
};
