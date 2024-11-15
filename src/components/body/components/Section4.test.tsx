import { describe, expect, it, vi } from 'vitest';
import { DataContext } from '../../../context/DataContext'; // Asegúrate de que esta ruta sea correcta
import { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Section4 from './Section4';

vi.mock('./Dropdown', () => ({
    default: () => <div>Mock Dropdown</div>
}))

const mockFaqData = [
    {
        type: 'General',
        question: 'What is this program?',
        answer: [{ type: 'text', data: 'This program is about...' }],
    },
    {
        type: 'Eligibility',
        question: 'Who can apply?',
        answer: [{ type: 'text', data: 'Anyone can apply...' }],
    },
];

const MockDataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider value={{ data: { scholarship: { faqs: { items: mockFaqData } } } }}>
        {children}
    </DataContext.Provider>
);

describe('Section4 Component', () => {
    it('renders correctly with provided FAQ data', () => {
        const { getByText } = render(
            <MockDataProvider>
                <Section4 />
            </MockDataProvider>
        );

        // Verificar que los textos se renderizan correctamente
        expect(getByText('Frequently asked questions')).toBeDefined();
        expect(getByText('Filter by:')).toBeDefined();
        expect(getByText('What is this program?')).toBeDefined();
        expect(getByText('Who can apply?')).toBeDefined();
    });

    it('toggles FAQ answer visibility when button is clicked', () => {
        const { getAllByText } = render(
            <MockDataProvider>
                <Section4 />
            </MockDataProvider>
        );

        fireEvent.click(getAllByText('+')[0]);
        const message = screen.queryByText("This program is about...")
        expect(message).toBeVisible();
    });
});