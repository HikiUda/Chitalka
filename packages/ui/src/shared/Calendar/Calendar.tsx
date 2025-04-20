import { classNames } from '@packages/model/src/lib/helpers/classNames';
import {
    Button,
    Calendar as ACalendar,
    CalendarCell,
    CalendarGrid,
    Heading,
    type CalendarProps as ACalendarProps,
    type DateValue,
} from 'react-aria-components';
import cls from './Calendar.module.scss';

interface CalendarProps<T extends DateValue> extends ACalendarProps<T> {
    className?: string;
}

export const Calendar = <T extends DateValue>(props: CalendarProps<T>) => {
    const { className, ...otherProps } = props;

    return (
        <ACalendar
            firstDayOfWeek="mon"
            {...otherProps}
            className={classNames(cls.Calendar, {}, [className])}
        >
            <header>
                <Button className={cls.Button} slot="previous">
                    ◀
                </Button>
                <Heading className={cls.Heading} />
                <Button className={cls.Button} slot="next">
                    ▶
                </Button>
            </header>
            <CalendarGrid>
                {(date) => <CalendarCell className={cls.CalendarCell} date={date} />}
            </CalendarGrid>
        </ACalendar>
    );
};
