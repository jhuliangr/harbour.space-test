import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Section3 from './Section3';
import { ReactNode } from 'react';

vi.mock('swiper/react', () => {
    return {
        Swiper: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        SwiperSlide: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        useSwiper: () => ({
            slideNext: vi.fn(),
            slidePrev: vi.fn(),
        }),
    };
});

vi.mock('./Section3Item', () =>
({
    default: () => <div>Mock Section3Item</div>
}))

describe('Section3 Component', () => {
    it('renders correctly with Swiper and Section3Item', () => {
        const { getAllByText } = render(<Section3 />);
        const items = getAllByText('Mock Section3Item');
        expect(items.length).toBe(6);

        expect(document.querySelector('img[alt="pattern_responsive"]')).toBeDefined();
        expect(document.querySelector('img[alt="pattern"]')).toBeDefined();
    });
});