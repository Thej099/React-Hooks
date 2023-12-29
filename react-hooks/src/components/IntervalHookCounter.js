import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            console.log('cleanup')
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter