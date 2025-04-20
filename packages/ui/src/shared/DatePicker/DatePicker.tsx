import { classNames } from '@packages/model/src/lib/helpers/classNames';
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
import { parseDate } from '@internationalized/date';
import { useRef } from 'react';
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

    const inputRef = useRef<HTMLDivElement | null>(null);
    const handleBlur = () => {
        if (!inputRef.current) return;

        const segments = inputRef.current.querySelectorAll('[data-type]');
        let year = null,
            month = null,
            day = null;
        segments.forEach((seg) => {
            const type = seg.getAttribute('data-type');
            const text = seg.textContent;
            const num = parseInt(text ?? '', 10);
            if (!isNaN(num)) {
                if (type === 'year') year = num;
                if (type === 'month') month = num;
                if (type === 'day') day = num;
            }
        });
        if (year && (!month || !day)) {
            const fullDate = parseDate(`${year}-${month || 1}-${day || 1}`);
            //@ts-expect-error
            console.log(fullDate);
            onChange?.(fullDate);
        }
    };

    return (
        <I18nProvider locale={locale}>
            <DatePickerContext.Provider value={{ isOpen, onOpenChange: handleIsOpen }}>
                <ADatePicker
                    aria-label="default"
                    onBlur={() => handleBlur()}
                    {...otherProps}
                    value={value}
                    onChange={onChange}
                    className={classNames(cls.DatePicker, {}, [className])}
                >
                    <Group className={cls.Group}>
                        <DateInput ref={inputRef} className={cls.DateInput}>
                            {(segment) => (
                                <DateSegment className={cls.DateSegment} segment={segment} />
                            )}
                        </DateInput>
                        <Button className={cls.Button}>▼</Button>
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
