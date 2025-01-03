"use client"
import { createContext, } from 'react'



interface Count {
    [x: string]: any
}



export const countContext = createContext({} as Count )
export const dataContext = createContext({} as Count)

