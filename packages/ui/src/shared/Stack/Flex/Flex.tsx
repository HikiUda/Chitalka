import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import { Mods } from '@packages/model/src/lib/classNames/types/classNamesType';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexAlign = 'start' | 'end' | 'center';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};
const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = '8',
        max,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
    ];

    return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>;
};
