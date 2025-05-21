import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
    it('renders ok', () => {
        const { getByText } = render(<Dropdown />);
        
        expect(getByText('Program conditions')).toBeDefined();
    });
});