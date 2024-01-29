import { useEffect, useRef, useState } from "react";


function MyComponent() {
	// let [number, setNumber] = useState(0);
	// const ref = useRef(0);

	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);
	const inputRef3 = useRef(null);

	useEffect(() => {
		console.log("component rendered")
	})

	function handleClick1(){
		// ref.current += 1;
		// console.log(ref.current)
		inputRef1.current.focus();
		inputRef1.current.style.backgroundColor = 'yellow';
		inputRef2.current.style.backgroundColor = '';
		inputRef3.current.style.backgroundColor = '';
	}

	function handleClick2(){
		// ref.current += 1;
		// console.log(ref.current)
		inputRef2.current.focus();
		inputRef1.current.style.backgroundColor = '';
		inputRef2.current.style.backgroundColor = 'yellow';
		inputRef3.current.style.backgroundColor = '';
	}

	function handleClick3(){
		// ref.current += 1;
		// console.log(ref.current)
		inputRef3.current.focus();
		inputRef1.current.style.backgroundColor = '';
		inputRef2.current.style.backgroundColor = '';
		inputRef3.current.style.backgroundColor = 'yellow';
	}

	return (
		<div>
			<button onClick={handleClick1}>
				Click Me 1!
			</button>
			<input ref={inputRef1}/>

			<button onClick={handleClick2}>
				Click Me 2!
			</button>
			<input ref={inputRef2}/>

			<button onClick={handleClick3}>
				Click Me 3!
			</button>
			<input ref={inputRef3}/>
		</div>
		
	)
}

export default MyComponent