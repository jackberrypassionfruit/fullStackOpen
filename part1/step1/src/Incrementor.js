import { useState } from "react"

const Incrementor = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const handleClick = (e) => {
    setCounter(counter + 1)
  }

  return (
    
    <>
      <div>{counter}</div>
      <button onClick={ (e) => { setCounter(counter + 1) }}> 
        + Plus 1 
      </button>
    </>
  )
}

export default Incrementor