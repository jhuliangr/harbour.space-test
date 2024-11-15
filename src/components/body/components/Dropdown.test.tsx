import { render } from '@testing-library/react'
import Dropdown from './Dropdown'
import { describe, expect, it } from 'vitest'

describe('Dropdown Component', () => {
    it('renders ok', () => {
        const { getByText } = render(<Dropdown />);
        
        expect(getByText('Program conditions')).toBeDefined();
    });
});