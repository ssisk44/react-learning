import PropTypes from 'prop-types'

function ReusableList(props){
	const itemList = props.items;
	const category = props.category;


	const listItems = itemList.map(item => <li key={item.id}>
		{item.name}: <b>{item.calories}</b>
	</li>);

	return(
		<>
			<h3 className="list-category">Category: {category}</h3>
			<ol className="list-items">{listItems}</ol>
		</>	
	);
}
ReusableList.propTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		calories: PropTypes.number
	}))
}

ReusableList.defaultProps = {
	category: 'Category',
	items: []

}

export default ReusableList;