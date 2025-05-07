import { classNames } from '@/shared/lib/helpers/classNames';
import {
    Button,
    DateValue,
    DateInput,
    DatePicker as ADatePicker,
    DatePickerProps as ADatePickerProps,
    DateSegment,
    Group,
    Dialog,
    Popover,
    DatePickerContext,
    I18nProvider,
} from 'react-aria-components';
import { Calendar } from '../Calendar';
import { useFreePopover } from '../Popover';
import cls from './DatePicker.module.scss';
interface DatePickerProps<T extends DateValue> extends ADatePickerProps<T> {
    className?: string;
    locale?: string;
}

export const DatePicker = <T extends DateValue>(props: DatePickerProps<T>) => {
    const { className, locale = 'ru-RU', value, onChange, ...otherProps } = props;
    const { isOpen, handleIsOpen } = useFreePopover();

    return (
        <I18nProvider locale={locale}>
            <DatePickerContext.Provider value={{ isOpen, onOpenChange: handleIsOpen }}>
                <ADatePicker
                    aria-label="default"
                    {...otherProps}
                    value={value}
                    onChange={onChange}
                    className={classNames(cls.DatePicker, {}, [className])}
                >
                    <Group className={cls.Group}>
                        <DateInput className={cls.DateInput}>
                            {(segment) => (
                                <DateSegment className={cls.DateSegment} segment={segment} />
                            )}
                        </DateInput>
                        <Button data-testid="DatePicker-Open-Button" className={cls.Button}>
                            ▼
                        </Button>
                    </Group>
                    <Popover className={cls.popover}>
                        <Dialog className={cls.dialog}>
                            <Calendar />
                        </Dialog>
                    </Popover>
                </ADatePicker>
            </DatePickerContext.Provider>
        </I18nProvider>
    );
};
