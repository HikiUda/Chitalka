import {
    Select,
    Label,
    SelectValue,
    ListBox,
    ListBoxItem,
    FieldError,
    Text,
    Popover,
    SelectContext,
} from 'react-aria-components';
import type { ListBoxItemProps, SelectProps, ValidationResult } from 'react-aria-components';
import SelectArrowIcon from '@ui/assets/icon/common/selectArrow.svg';
import { preventDisableScroll } from '@packages/model/src/lib/helpers/preventDisableScroll/preventDisableScroll';

import { ReactNode } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useFreePopover } from '../Popover';
import cls from './Select.module.scss';

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: ReactNode | ((item: T) => ReactNode);
}

export const MySelect = <T extends object>(props: MySelectProps<T>) => {
    const { label, description, errorMessage, children, items, ...otherProps } = props;
    const { isOpen, handleIsOpne } = useFreePopover();

    return (
        <SelectContext.Provider value={{ isOpen, onOpenChange: handleIsOpne }}>
            <Select {...otherProps} onOpenChange={preventDisableScroll}>
                <Label>{label}</Label>
                <Button theme="outline" className={cls.btn}>
                    <SelectValue />
                    <Icon Svg={SelectArrowIcon} width={10} height={10} className={cls.icon} />
                </Button>
                {description && <Text slot="description">{description}</Text>}
                <FieldError>{errorMessage}</FieldError>
                <Popover className={cls.popover}>
                    <ListBox items={items}>{children}</ListBox>
                </Popover>
            </Select>
        </SelectContext.Provider>
    );
};

export const MyItem = (props: ListBoxItemProps) => {
    return <ListBoxItem {...props} className={cls.selectItem} />;
};
