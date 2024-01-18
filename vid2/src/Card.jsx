import profilePicture from "./assets/profilePicture.jpg"

function Card(){
	return (
		<div className="card">
			<img className="card-image" src={profilePicture} alt="Profile Picture"></img>
			<h2 className="card-title">Sam S</h2>
			<p className="card-text">Programmer</p>
		</div>
	);
}

export default Card;