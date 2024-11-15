import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReactNode } from 'react';
import { DataContext } from '../../../context/DataContext';
import Section1 from './Section1';

const mockData = {
    scholarship: {
        name: 'Beca Ejemplo',
        company: { name: 'Compañía Ejemplo' },
        description: [{ data: 'Descripción de la beca.' }],
        position: ['Desarrollador'],
        application_end_date: '2023-12-31 00:00:00',
        location: { name: 'Ubicación Ejemplo' },
        duration: '6 meses',
        scholarship_start_date: '2023-01-01 00:00:00'
    },
};

const MockDataProvider = ({ children }:{children: ReactNode}) => (
    <DataContext.Provider value={{ data: mockData }}>
        {children}
    </DataContext.Provider>
);


describe('Section1 Component', () => {
    it('renders correctly with provided data', () => {
        const { getByText, getByAltText } = render(
            <MockDataProvider>
                <Section1 />
            </MockDataProvider>
        );

        expect(getByText('Beca Ejemplo')).toBeDefined();
        expect(getByText('Compañía Ejemplo')).toBeDefined();
        expect(getByText('Descripción de la beca.')).toBeDefined();
        expect(getByText('Position:')).toBeDefined();
        expect(getByText('Desarrollador')).toBeDefined();
        expect(getByText('Application closes in')).toBeDefined();
        expect(getByText('Ubicación Ejemplo')).toBeDefined();
        expect(getByText('6 meses')).toBeDefined();

        expect(getByAltText('interaction_design')).toBeDefined();
        expect(getByAltText('zeptolab_logo')).toBeDefined();
        expect(getByAltText('background_detail')).toBeDefined();
    });
});