import {
    Select as ASelect,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    SelectContext,
} from 'react-aria-components';
import type { ListBoxItemProps, SelectProps } from 'react-aria-components';

import { ReactNode, useEffect } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useFreePopover } from '../Popover';
import cls from './Select.module.scss';
import { MiniOutline } from './SelectButtons/MiniOutline/MiniOutline';

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, 'children'> {
    label?: string;
    items?: Iterable<T>;
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * * Select have own custom button
     *
     * ! You may not use other buttons
     *
     * * Just use existed (impot from public api Select)
     */
    selectButton?: ReactNode;
    max?: boolean;
}

export const Select = <T extends object>(props: MySelectProps<T>) => {
    const { label, children, items, selectButton, max, isOpen, ...otherProps } = props;
    const { isOpen: isOpenPop, handleIsOpen } = useFreePopover();
    useEffect(() => {
        handleIsOpen(!!isOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SelectContext.Provider
            value={{
                isOpen: isOpenPop,
                onOpenChange: handleIsOpen,
                className: max ? cls.max : undefined,
            }}
        >
            <ASelect {...otherProps}>
                <Label>{label}</Label>
                {selectButton ? selectButton : <MiniOutline data-testid="SelectButtonByDefault" />}
                <Popover className={classNames(cls.popover, { [cls.minWidthTarget]: max })}>
                    <ListBox items={items}>{children}</ListBox>
                </Popover>
            </ASelect>
        </SelectContext.Provider>
    );
};

export const SelectItem = (props: ListBoxItemProps) => {
    return <ListBoxItem {...props} className={cls.selectItem} />;
};
