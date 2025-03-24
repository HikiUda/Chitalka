import {
    Select,
    Label,
    ListBox,
    ListBoxItem,
    FieldError,
    Text,
    Popover,
    SelectContext,
} from 'react-aria-components';
import type { ListBoxItemProps, SelectProps, ValidationResult } from 'react-aria-components';
import { preventDisableScroll } from '@packages/model/src/lib/helpers/preventDisableScroll/preventDisableScroll';

import { ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { useFreePopover } from '../Popover';
import cls from './Select.module.scss';
import { MiniOutline } from './SelectButtons/MiniOutline/MiniOutline';

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: ReactNode | ((item: T) => ReactNode);
    selectButton?: ReactNode;
    max?: boolean;
}

export const MySelect = <T extends object>(props: MySelectProps<T>) => {
    const { label, description, errorMessage, children, items, selectButton, max, ...otherProps } =
        props;
    const { isOpen, handleIsOpne } = useFreePopover();

    return (
        <SelectContext.Provider
            value={{ isOpen, onOpenChange: handleIsOpne, className: max ? cls.max : undefined }}
        >
            <Select {...otherProps} onOpenChange={preventDisableScroll}>
                <Label>{label}</Label>
                {selectButton ? selectButton : <MiniOutline />}
                {description && <Text slot="description">{description}</Text>}
                <FieldError>{errorMessage}</FieldError>
                <Popover className={classNames(cls.popover, { [cls.minWidthTarget]: max })}>
                    <ListBox items={items}>{children}</ListBox>
                </Popover>
            </Select>
        </SelectContext.Provider>
    );
};

export const MyItem = (props: ListBoxItemProps) => {
    return <ListBoxItem {...props} className={cls.selectItem} />;
};
