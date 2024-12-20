import { useState } from 'react'
import './counter.css'

const Counter = ({num}) => {
    const [count, setCount] = useState(0)

    const Plus = () => {
        setCount(count + 1)
    }
    return(
        <div className='counter'>
            <h2>{num}. Counter</h2>
            <div className="container">
                <button onClick={Plus}>Click me</button>
                <span>{count}</span>
            </div>
        </div>
    )
}

export default Counter