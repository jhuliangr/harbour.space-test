import { getEnv } from "../services/env-service";

export const getData = async () => {

    try {
        const response = await fetch(getEnv().apiUrl);

        if (!response.ok) {
            throw new Error("Error on network while fetching data");
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
