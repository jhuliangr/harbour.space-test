import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { getData } from '../api/getApiData';
import { DataState } from '../types/Datastate';


export const DataContext = createContext({
    data: {}
} as DataState);

export function DataContextProvider({ children }: PropsWithChildren) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function getApiData(){
            const data = await getData();
            setData(data);
        }
        getApiData()
    }, [])

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
    return useContext<DataState>(DataContext);
}
