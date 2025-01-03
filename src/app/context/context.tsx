"use client"
import { createContext, } from 'react'



interface Count {
    [x: string]: any | number
}

// interface Data {
//     name: string;
//     count: number;
//   }



export const countContext = createContext({} as Count )
export const dataContext = createContext({} as Count)

