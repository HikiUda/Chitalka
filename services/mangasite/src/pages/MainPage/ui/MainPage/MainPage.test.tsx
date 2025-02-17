import { render, screen } from '@testing-library/react';

describe('mainpage', () => {
    it('test', () => {
        render(<div data-testid="div">Text</div>);
        expect(screen.getByTestId('div')).toBeInTheDocument();
    });
});
