import { getTimeRelativeNow } from './getTimeRelativeNow';

describe('getTimeRelativeNow', () => {
    const referenceDate = new Date('2023-01-01T12:00:00Z');

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(referenceDate);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    describe('Invalid date handling', () => {
        it('should return "Invalid Date" for invalid date input', () => {
            expect(getTimeRelativeNow(new Date('invalid'))).toBe('Invalid Date');
        });
    });

    describe('Russian locale (ru)', () => {
        const options = { locale: 'ru' } as const;

        it('should format seconds correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T11:59:30Z'), options)).toBe(
                '30 секунд назад',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T12:00:30Z'), options)).toBe(
                'через 30 секунд',
            );
        });

        it('should format minutes correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T11:58:00Z'), options)).toBe(
                '2 минуты назад',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T12:02:00Z'), options)).toBe(
                'через 2 минуты',
            );
        });

        it('should format hours correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T09:00:00Z'), options)).toBe(
                '3 часа назад',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T15:00:00Z'), options)).toBe(
                'через 3 часа',
            );
        });

        it('should format days correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-12-29T12:00:00Z'), options)).toBe(
                '3 дня назад',
            );
            expect(getTimeRelativeNow(new Date('2023-01-04T12:00:00Z'), options)).toBe(
                'через 3 дня',
            );
        });

        it('should format weeks correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-12-18T12:00:00Z'), options)).toBe(
                '2 недели назад',
            );
            expect(getTimeRelativeNow(new Date('2023-01-15T12:00:00Z'), options)).toBe(
                'через 2 недели',
            );
        });

        it('should format months correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-10-01T12:00:00Z'), options)).toBe(
                '3 месяца назад',
            );
            expect(getTimeRelativeNow(new Date('2023-04-01T12:00:00Z'), options)).toBe(
                'через 3 месяца',
            );
        });

        it('should format years correctly', () => {
            expect(getTimeRelativeNow(new Date('2020-01-01T12:00:00Z'), options)).toBe(
                '3 года назад',
            );
            expect(getTimeRelativeNow(new Date('2026-01-01T12:00:00Z'), options)).toBe(
                'через 3 года',
            );
        });
    });

    describe('English (en-GB) locale', () => {
        const options = { locale: 'en' } as const;

        it('should format seconds correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T11:59:30Z'), options)).toBe(
                '30 seconds ago',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T12:00:30Z'), options)).toBe(
                'in 30 seconds',
            );
        });

        it('should format minutes correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T11:58:00Z'), options)).toBe(
                '2 minutes ago',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T12:02:00Z'), options)).toBe(
                'in 2 minutes',
            );
        });

        it('should format hours correctly', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T09:00:00Z'), options)).toBe(
                '3 hours ago',
            );
            expect(getTimeRelativeNow(new Date('2023-01-01T15:00:00Z'), options)).toBe(
                'in 3 hours',
            );
        });

        it('should format days correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-12-29T12:00:00Z'), options)).toBe(
                '3 days ago',
            );
            expect(getTimeRelativeNow(new Date('2023-01-04T12:00:00Z'), options)).toBe('in 3 days');
        });

        it('should format weeks correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-12-18T12:00:00Z'), options)).toBe(
                '2 weeks ago',
            );
            expect(getTimeRelativeNow(new Date('2023-01-15T12:00:00Z'), options)).toBe(
                'in 2 weeks',
            );
        });

        it('should format months correctly', () => {
            expect(getTimeRelativeNow(new Date('2022-10-01T12:00:00Z'), options)).toBe(
                '3 months ago',
            );
            expect(getTimeRelativeNow(new Date('2023-04-01T12:00:00Z'), options)).toBe(
                'in 3 months',
            );
        });

        it('should format years correctly', () => {
            expect(getTimeRelativeNow(new Date('2020-01-01T12:00:00Z'), options)).toBe(
                '3 years ago',
            );
            expect(getTimeRelativeNow(new Date('2026-01-01T12:00:00Z'), options)).toBe(
                'in 3 years',
            );
        });
    });

    describe('Default behavior', () => {
        it('should use Russian locale by default', () => {
            expect(getTimeRelativeNow(new Date('2023-01-01T11:59:30Z'))).toBe('30 секунд назад');
        });
    });
});
