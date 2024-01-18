function Button() {


	const handleClick = (e) => {
		e.target.textContent = 'Ouch'
	}


	return ( // onDoubleClick is a thing as well
		<button onClick={(e) => handleClick(e)}>Click Me 😃</button>
	)
}
export default Button;