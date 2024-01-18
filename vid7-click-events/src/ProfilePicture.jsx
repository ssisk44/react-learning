import './ProfilePictureStyles.css';
import imageUrl from './assets/ai-pfp.png'

function ProfilePicture() {

	const handleClick = (e) => {
		e.target.style.visibility = 'hidden';
	};

	return (
		<>
			<img src={imageUrl} onClick={(e) => handleClick(e)}></img>
		</>
	)
}
export default ProfilePicture