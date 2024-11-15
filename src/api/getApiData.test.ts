import { vi, expect, test } from 'vitest';
import { getData } from './getApiData';

vi.mock("../services/env-service", () => ({
    getEnv: vi.fn(() => ({
        apiUrl: 'https://api.example.com/data'
    }))
}));

global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({ data: "mocked data" }),
        headers: new Headers(),
        redirected: false,
        statusText: "OK",
        type: "default",
        url: "",
        clone: () => this,
    } as unknown as Response)
);


test('should return data when fetch is successful', async () => {
    const data = await getData();

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
    expect(data).toEqual({ data: 'mocked data' });
});
