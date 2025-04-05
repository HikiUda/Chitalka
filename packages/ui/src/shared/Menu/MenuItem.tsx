import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { MenuItem, type MenuItemProps } from 'react-aria-components';
import cls from './MenuItem.module.scss';

interface MyMenuItemProps extends MenuItemProps {
    className?: string;
}

export const MyItem = (props: MyMenuItemProps) => {
    const textValue =
        props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return (
        <MenuItem
            {...props}
            textValue={textValue}
            className={classNames(cls.MenuItem, {}, [props.className])}
        >
            {({ hasSubmenu }) => (
                <>
                    {props.children}
                    {hasSubmenu && (
                        <svg className={cls.chevron} viewBox="0 0 24 24">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    )}
                </>
            )}
        </MenuItem>
    );
};
