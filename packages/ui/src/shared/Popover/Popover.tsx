import { classNames } from '@packages/model/src/lib/classNames';
import { memo, ReactNode, useRef } from 'react';
import {
    ButtonContext,
    Dialog,
    Popover,
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

export const MyPopover = memo((props: MyPopoverProps) => {
    const { className, children, button, ...otherProps } = props;
    const triggerRef = useRef(null);
    const { isOpen, handleIsOpne } = useFreePopover();

    return (
        <ButtonContext.Provider value={{ onPress: () => handleIsOpne(true), ref: triggerRef }}>
            <PopoverContext.Provider value={{ isOpen, onOpenChange: handleIsOpne, triggerRef }}>
                {button}
                <Popover className={classNames(cls.Popover, {}, [className])} {...otherProps}>
                    <Dialog aria-label="popover">{children}</Dialog>
                </Popover>
            </PopoverContext.Provider>
        </ButtonContext.Provider>
    );
});
