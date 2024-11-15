import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from ".";

describe("Navbar rendering correctly", () => {
    it('renders all sections', () => {
        const { getByText } = render(<Navbar />);

        expect(getByText('HARBOUR SPACE')).toBeDefined();
        expect(getByText('APPLY')).toBeDefined();
    });
})