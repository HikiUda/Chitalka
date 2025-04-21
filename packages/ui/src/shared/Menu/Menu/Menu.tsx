import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { ReactElement, ReactNode } from 'react';
import type { MenuProps, MenuTriggerProps } from 'react-aria-components';
import { Menu, Popover, MenuTrigger } from 'react-aria-components';
import { useFreePopover } from '../../Popover';
import cls from './Menu.module.scss';

interface MyMenuProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children' | 'classnName'> {
    button: ReactElement;
    className?: string;
    children?: ReactNode;
    max?: boolean;
}
export const MyMenu = <T extends object>({
    button,
    children,
    className,
    max,
    ...props
}: MyMenuProps<T>) => {
    const { isOpen, handleIsOpen } = useFreePopover();

    return (
        <MenuTrigger {...props} isOpen={isOpen} onOpenChange={handleIsOpen}>
            {button}
            <Popover className={cls.popover}>
                <Menu {...props} className={classNames(cls.Menu, { [cls.max]: max }, [className])}>
                    {children}
                </Menu>
            </Popover>
        </MenuTrigger>
    );
};
