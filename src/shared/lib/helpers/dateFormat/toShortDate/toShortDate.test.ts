import { toShortDate } from './toShortDate';

describe(' toShortDate', () => {
    it('valid ru Date', () => {
        const validDate = new Date('2020-05-12');
        expect(toShortDate(validDate)).toBe('12.05.2020');
    });
    it('valid en Date', () => {
        const validDate = new Date('2020-05-12');
        expect(toShortDate(validDate, { locale: 'en' })).toBe('12/05/2020');
    });
    it('novalid Date', () => {
        const novalidDate = new Date('dsafdsf');
        console.log(novalidDate);
        expect(toShortDate(novalidDate)).toBe('Invalid Date');
    });
});
