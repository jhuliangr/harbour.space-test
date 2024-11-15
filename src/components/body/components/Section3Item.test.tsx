import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Section3Item from "./Section3Item";

describe('Section3 Component', () => {
    it('renders correctly with Swiper and Section3Item', () => {
        const { getAllByText } = render(<Section3Item />);
        expect(getAllByText("Drag")).toBeDefined();

        expect(document.querySelector('img[alt="pattern_responsive"]')).toBeDefined();
        expect(document.querySelector('img[alt="pattern"]')).toBeDefined();
    });
});