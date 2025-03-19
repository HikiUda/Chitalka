import { classNames } from '@packages/model/src/lib/classNames';
import { ReactElement } from 'react';
import type { MenuProps, MenuTriggerProps } from 'react-aria-components';
import { Menu, Popover, MenuTrigger } from 'react-aria-components';
import cls from './Menu.module.scss';

interface MyMenuProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
    button: ReactElement;
}

export const MyMenu = <T extends object>({
    button,
    children,
    className,
    ...props
}: MyMenuProps<T>) => {
    return (
        <MenuTrigger {...props}>
            {button}
            <Popover>
                <Menu {...props} className={classNames(cls.Menu, {}, [className])}>
                    {children}
                </Menu>
            </Popover>
        </MenuTrigger>
    );
};
