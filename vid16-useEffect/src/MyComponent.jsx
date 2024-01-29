import { useState, useEffect } from "react"

useState

function MyComponent() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("Green");

	// // rerender
	// useEffect(() => {
	// 	document.title = `Count: ${count}`;
	// })

	// // only on initial mount
	// useEffect(() => {
	// 	document.title = `Count: ${count}`;
	// }, [])

	// on value change + mount
	useEffect(() => {
		document.title = `Count: ${count} ${color}`;

		return () => {
			// CLEANUP CODE BEFORE NEXT RENDER OR ON UNMOUNT
		}
	}, [count, color])

	function addCount(){
		setCount(c => c + 1);
	}

	function subtractCount(){
		setCount(c => c - 1);
	}

	function changeColor() {
		setColor(c => c === "green" ? "red" : "green")
	}

	return (
		<div>
			<p style={{color: color}}>Count: {count}</p>
			<button onClick={addCount}>Add</button>
			<button onClick={subtractCount}>Subtract</button>
			<button onClick={changeColor}>Change Color</button>
		</div>
	)
}

export default MyComponent