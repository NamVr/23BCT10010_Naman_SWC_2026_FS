import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState(10);

  const handleClick = function() {
	const nextCount = count + 1;
	setCount(nextCount);
	if (nextCount % 3 == 0) {
		setX(x*2);
	}
  }

  return (
	<>
	<div>
		<h1>x = {x}</h1>
		<button onClick={handleClick}>Click Me</button>
		<p>Button Press Count: {count}</p>
	</div>
	</>
  )
}

export default App
