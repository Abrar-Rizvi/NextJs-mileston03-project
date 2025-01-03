import { useContext} from 'react'
import Button from './Button'
import { countContext } from '@/app/context/context'

const Quantity = () => {
    const obj = useContext(countContext)
    console.log(obj)
    // const [count, setCount] = useState<number>(1)
    const clickHandlerAdd = () => {
        obj.setCount(obj.count + 1)
    }

    const clickHandlerMinus = () => {
        if(obj.count > 1){
            obj.setCount(obj.count - 1)
        }
        
    }
  return (
    <div className='flex flex-col  mt-5'>
        <span>Quantity</span>
        <div className=' border border-[#c8896a] flex justify-evenly w-[100px]  py-2 mt-3'>
            <Button content={'-'} className={'text-xl'} onClick={clickHandlerMinus }/>
            <div className='text-xl'>{obj.count}</div>
            <Button content={'+'} className={'text-xl'} onClick={clickHandlerAdd} />
        </div>
    </div>
  )
}

export default Quantity