import { classNames, Mods } from '@packages/model/src/lib/helpers/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';
export type FlexAlign = 'start' | 'end' | 'center' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexGap = '4' | '8' | '16' | '32';
export type FlexWrap = 'wrap' | 'wrapReverse' | 'nowrap';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
};
const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    stretch: cls.alignStretch,
};
const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
    rowReverse: cls.directionRowReverse,
    columnReverse: cls.directionColumnReverse,
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
    flexGrow?: boolean;
    flexShrink?: boolean;
}

export function getFlex(props: GetFlexProps = {}): string {
    const {
        justify = 'center',
        align = 'center',
        direction = 'row',
        gap = '8',
        max,
        wrap = 'nowrap',
        flexGrow,
        flexShrink = true,
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
        [cls.flexGrow]: flexGrow,
        [cls.flexShrink]: flexShrink,
        [cls.flexNotGrow]: !flexGrow,
        [cls.flexNotShrink]: !flexShrink,
    };

    return classNames(cls.Flex, mods, classes);
}
