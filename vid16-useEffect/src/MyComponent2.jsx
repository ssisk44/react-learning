import { useState, useEffect } from "react"


function MyComponent2() { 
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	function handleResize(){
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}

	// // adds a new event listener every time component rerenders BAD
	// window.addEventListener('resize', handleResize);
	// console.log("event listener added");

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		console.log("event listener added");

		return () => { // cleanup before next render or before unmount
			// when we are done with this component clean up resources to prevent unwanted behavior
			window.removeEventListener('resize', handleResize);
			console.log("event listener removed");
		}
	}, [])

	useEffect(() => {
		document.title = `Size: ${width} x ${height}`;
	}, [width, height])

	return (
		<div>
			<p>Window Width: {width}px</p>
			<p>Window Height: {height}px</p>
		</div>
	)
}

export default MyComponent2