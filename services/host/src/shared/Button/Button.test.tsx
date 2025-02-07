import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('Button', () => {
        render(<Button />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
