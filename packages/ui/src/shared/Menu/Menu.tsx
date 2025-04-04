import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { ReactElement, ReactNode } from 'react';
import type { MenuProps, MenuTriggerProps } from 'react-aria-components';
import { Menu, Popover, MenuTrigger } from 'react-aria-components';
import { useFreePopover } from '../Popover';
import cls from './Menu.module.scss';

interface MyMenuProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children' | 'classnName'> {
    button: ReactElement;
    className?: string;
    children?: ReactNode;
}
// ? useless component
export const MyMenu = <T extends object>({
    button,
    children,
    className,
    ...props
}: MyMenuProps<T>) => {
    const { isOpen, handleIsOpne } = useFreePopover();
    return (
        <MenuTrigger {...props} isOpen={isOpen} onOpenChange={handleIsOpne}>
            {button}
            <Popover>
                <Menu {...props} className={classNames(cls.Menu, {}, [className])}>
                    {children}
                </Menu>
            </Popover>
        </MenuTrigger>
    );
};
