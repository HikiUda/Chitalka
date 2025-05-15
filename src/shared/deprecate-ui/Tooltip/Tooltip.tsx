import { FC, ReactNode } from 'react';
import {
    OverlayArrow,
    TooltipTrigger,
    Tooltip as ATooltip,
    TooltipProps as ATooltipProps,
} from 'react-aria-components';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Tooltip.module.scss';

interface TooltipProps extends Omit<ATooltipProps, 'children'> {
    className?: string;
    children?: ReactNode;
    trigger?: ReactNode;
    delay?: number;
    closeDelay?: number;
    isDisabled?: boolean;
    tooltipTrigger?: 'focus';
}
// ? usless component
export const Tooltip: FC<TooltipProps> = (props) => {
    const {
        className,
        trigger,
        children,
        delay,
        closeDelay,
        isDisabled,
        tooltipTrigger,
        ...otherProps
    } = props;

    return (
        <TooltipTrigger
            delay={delay}
            closeDelay={closeDelay}
            isDisabled={isDisabled}
            trigger={tooltipTrigger}
        >
            {trigger}
            <ATooltip {...otherProps} className={classNames(cls.Tooltip, {}, [className])}>
                <OverlayArrow className={cls.OverlayArrow}>
                    <svg width={8} height={8} viewBox="0 0 8 8">
                        <path d="M0 0 L4 4 L8 0" />
                    </svg>
                </OverlayArrow>
                {children}
            </ATooltip>
        </TooltipTrigger>
    );
};
