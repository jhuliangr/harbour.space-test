import { render } from '@testing-library/react'
import Body from './'
import { describe, expect, it, vi } from 'vitest'

vi.mock('./components/Section1', () => ({
    default: () => <div>Section1</div>,
}))
vi.mock('./components/Section2', () => ({
    default: () => <div>Section2</div>,
}))
vi.mock('./components/Section3', () => ({
    default: () => <div>Section3</div>,
}))
vi.mock('./components/Section4', () => ({
    default: () => <div>Section4</div>,
}))

describe('Body Component', () => {
    it('renders all sections', () => {
        const { getByText } = render(<Body />);
        
        expect(getByText('Section1')).toBeDefined();
        expect(getByText('Section2')).toBeDefined();
        expect(getByText('Section3')).toBeDefined();
        expect(getByText('Section4')).toBeDefined();
    });
});