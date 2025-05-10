import { Options, toShortcutNumber } from './toShortcutNumber';

describe('toShortcutNumber', () => {
    describe('Russian locale (ru)', () => {
        it('less then 1000', () => {
            expect(toShortcutNumber(888)).toBe('888');
        });
        it('less then 1.000.000', () => {
            expect(toShortcutNumber(22678)).toBe('22тыс');
        });
        it('less then 100.000.000', () => {
            expect(toShortcutNumber(4522678)).toBe('4.52м');
        });
        it('more or equal 100.000.000', () => {
            expect(toShortcutNumber(124522678)).toBe('124м');
        });
    });
    describe('English locale (en)', () => {
        const options: Options = { locale: 'en' };
        it('less then 1000', () => {
            expect(toShortcutNumber(888, options)).toBe('888');
        });
        it('less then 1.000.000', () => {
            expect(toShortcutNumber(22678, options)).toBe('22k');
        });
        it('less then 100.000.000', () => {
            expect(toShortcutNumber(4522678, options)).toBe('4.52m');
        });
    });
});
