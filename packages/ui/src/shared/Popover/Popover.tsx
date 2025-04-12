import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { memo, ReactNode, useEffect, useRef } from 'react';
import {
    ButtonContext,
    Dialog,
    Popover as APopover,
    PopoverContext,
    PopoverProps,
} from 'react-aria-components';
import cls from './Popover.module.scss';
import { useFreePopover } from './useFreePopover';

interface MyPopoverProps extends Omit<PopoverProps, 'children'> {
    className?: string;
    children?: ReactNode;
    button?: ReactNode;
}

export const Popover = memo((props: MyPopoverProps) => {
    const { className, children, button, isOpen, ...otherProps } = props;
    const triggerRef = useRef(null);
    const { isOpen: isOpenPop, handleIsOpen } = useFreePopover();
    useEffect(() => {
        handleIsOpen(!!isOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ButtonContext.Provider value={{ onPress: () => handleIsOpen(true), ref: triggerRef }}>
            <PopoverContext.Provider
                value={{ isOpen: isOpenPop, onOpenChange: handleIsOpen, triggerRef }}
            >
                {button}
                <APopover {...otherProps} className={classNames(cls.Popover, {}, [className])}>
                    <Dialog aria-label="popover">{children}</Dialog>
                </APopover>
            </PopoverContext.Provider>
        </ButtonContext.Provider>
    );
});
