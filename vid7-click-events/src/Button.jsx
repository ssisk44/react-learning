function Button() {
	const handleClick2 = (name) => {
		alert(`${name} stop clicking me`)
	}


	return (
		<button onClick={() => handleClick2("Sam")}>Click Me 😃</button>
	)
}
export default Button;