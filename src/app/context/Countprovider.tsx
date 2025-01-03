"use client"
import React, {useState} from 'react'
import { countContext } from './context';
import { dataContext } from './context';
import { IProduct } from '@/Data';
export const Countprovider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
     const [count, setCount] = useState<number>(1)
    const [data, setData] = useState<null | IProduct>(null);
    return (
        <div>
            <countContext.Provider value={{count, setCount, }}>
                <dataContext.Provider value={{data, setData}}>
                {children}
                </dataContext.Provider>
            </countContext.Provider>


        </div>
    )
}

export default Countprovider