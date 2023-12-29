import React, { useEffect, useState } from 'react'

function UseEffectCounter() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  useEffect(() => {
    //code we want to run

    //optional return function

  },
  [])//dependency array

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}> Click{count} times</button>
    </div>
  )
}

export default UseEffectCounter