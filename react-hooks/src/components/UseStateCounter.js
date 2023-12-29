import React, { useState } from 'react'

//Function component
const UseStateCounter = () => {

  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  )
}

export default UseStateCounter;