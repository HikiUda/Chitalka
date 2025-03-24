import { classNames, Mods } from '@packages/model/src/lib/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';
export type FlexWrap = 'wrap' | 'wrapReverse' | 'nowrap';

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
const wrapClasses: Record<FlexWrap, string> = {
    wrap: cls.wrap,
    wrapReverse: cls.wrapReverse,
    nowrap: cls.nowrap,
};

export interface GetFlexProps {
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
}

export function getFlex(props: GetFlexProps = {}): string {
    const {
        justify = 'center',
        align = 'center',
        direction = 'row',
        gap = '8',
        max,
        wrap = 'nowrap',
    } = props;

    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
        wrapClasses[wrap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return classNames(cls.Flex, mods, classes);
}
