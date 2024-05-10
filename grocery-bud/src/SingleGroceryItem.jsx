import PropTypes from 'prop-types'

const SingleGroceryItem = ({ id, name, completed, deleteItem, editItem }) => {
    return (
		<li className='grocery-item'>
			<input
				type='checkbox'
				className='grocery-checkbox'
				checked={completed}
				onChange={() => editItem(id)}
			/>
			<p className='item-name'>{name}</p>
			<button
				type='button'
				className='btn delete-btn'
				onClick={() => deleteItem(id)}>
				Delete
			</button>
		</li>
	)
}

SingleGroceryItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	completed: PropTypes.bool,
	deleteItem: PropTypes.func,
	editItem: PropTypes.func,
}
export default SingleGroceryItem
