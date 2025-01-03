"use client"
import { IProduct } from '@/Data';
import { createContext, } from 'react'



// interface Count {
//     [x: string]: any | number
// }

// interface Data {
//     name: string;
//     count: number;
//   }
interface CountContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>; // Function to update `count`
  }
  
  interface DataContextType {
    data: IProduct | null;
    setData: React.Dispatch<React.SetStateAction<IProduct | null>>; // Function to update `data`
  }



export const countContext = createContext({} as  CountContextType  )
export const dataContext = createContext({} as DataContextType)

