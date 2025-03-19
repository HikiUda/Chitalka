import { toShortcutNumber } from './toShortcutNumber';

describe('toShortcutNumber', () => {
    it('less then 1000', () => {
        expect(toShortcutNumber(888)).toBe(888);
    });
    it('less then 1000000', () => {
        expect(toShortcutNumber(22678)).toBe('22тыс');
    });
    it('less more or equal 1000000', () => {
        expect(toShortcutNumber(4522678)).toBe('4м');
    });
});
