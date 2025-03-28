import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { getFlex, GetFlexProps } from './getFlex';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends GetFlexProps, DivProps {
    className?: string;
    children?: ReactNode;
}

export const Flex: FC<FlexProps> = (props) => {
    const { className, children, justify, align, direction, gap, max, wrap, ...otherProps } = props;

    const classes = getFlex({ justify, align, direction, gap, max, wrap });

    return (
        <div {...otherProps} className={classNames(className || '', {}, [classes])}>
            {children}
        </div>
    );
};
