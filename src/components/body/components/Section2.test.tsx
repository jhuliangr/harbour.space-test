import { ReactNode } from "react";
import { DataContext } from "../../../context/DataContext";
import { describe, expect, it } from "vitest";
import Section2 from "./Section2";
import { render } from "@testing-library/react";

const mockData = {
    scholarship: {
        about: [{ data: 'Información sobre las becas.' }],
        total_value: 10000,
        tuition: 5000,
        remaining: 5000,
        stipend_per_year: 2000,
        stipend_per_month: 166.67,
        study_commitment: 4,
        study_commitment_text: '4 horas al día',
        work_commitment: 4,
        internship_commitment_text: '4 horas al día',
    },
};

const MockDataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider value={{ data: mockData }}>
        {children}
    </DataContext.Provider>
);

describe('Section2 Component', () => {
    it('renders correctly with provided data', () => {
        const { getByText } = render(
            <MockDataProvider>
                <Section2 />
            </MockDataProvider>
        );

        // Verificar que los textos se renderizan correctamente
        expect(getByText('About the')).toBeDefined();
        expect(getByText('apprenticeships')).toBeDefined();
        expect(getByText('Información sobre las becas.')).toBeDefined();

        expect(getByText('Scholarship value')).toBeDefined();

        expect(getByText('Tuition')).toBeDefined();

        expect(getByText('Remaining')).toBeDefined();

        expect(getByText('GRADUATION')).toBeDefined();
        expect(getByText('A full-time contract')).toBeDefined();
    });
});