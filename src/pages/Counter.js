import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="text-center">
            
            <div className="flex justify-center gap-16">
                <button onClick={() => setCount(count - 1)}>-</button>
                <h3 className>Like: {count}</h3>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}